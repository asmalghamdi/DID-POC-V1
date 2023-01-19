import { Block } from './block.js'
import sha256 from "crypto-js/sha256.js"
class Blockchain {
    list = []
    constructor() {
        // check if there is a block in the list 
        // if not create a block 
        if (this.list.length == 0) {
            this.list.push(new Block("Genesis Block", "N/A", 0, 0))
        }

        // if there is a block 
        // do nothing 
    }

    addBlock(data) {
        const previousHash = this.getPerviousBlockHash()

        // create an instance of a block 
        let block = new Block(data, previousHash, 0, this.getCurrentBlockHeight())
        // mine the block
        let MinedBlock = this.mine(block)
        this.list.push(MinedBlock)
    }

    getCurrentBlockHeight() {
        return this.list.length
    }
    getPerviousBlockHash() {
        return this.list[this.list.length - 1].hash
    }

    print() {
        console.log(this.list)
    }

    // validate the blockchain 
    validateBlockchain() {
        // loop through the list
        for (let i = 1; i < this.list.length; i++) { // start from 1 because we don't need to validate the genesis block
            // check if the current block is valid
            if (!this.validateBlock(this.list[i])) { // if the block is not valid
                return false // return false
            }
            // check if the current block's previous hash is equal to the previous block's hash
            if (this.list[i].previousHash != this.list[i - 1].hash) { // if the previous hash is not equal to the previous block's hash

                return false
            }
        }
        return true
    }
    corruptBlockchain() {
        //get a random block from the blockchain
        let randomBlock = this.list[Math.floor(Math.random() * this.list.length)]
        // corrupt the blockchain by changing the data of a block
        randomBlock.data = "corrupted data"

    }
    mine(block) {
        for (let i = 0; i < 10_000_000; i++) { // loop through the numbers from 0 to 10_000_000
            let magicHash = sha256(block.data + i).toString(); // calculate the hash of the block's data + the nonce
            if (magicHash.startsWith("000")) { // if the hash starts with 000
                block.nonce = i // set the nonce to the current number
                block.hash = magicHash // set the hash to the magic hash
                break // break the loop
            }
        }
        return block
    }

    validateBlock(Block) {

        // check if the block's hash is equal to the calculated hash
        let hash = Block.hash // get the hash from the block

        let calculatedHash = sha256(Block.data + Block.nonce) // calculate the hash from the block's data
        return (hash == calculatedHash) // return the result
    }

}

const blockchain = new Blockchain();
// we add blocks to the blockchain
blockchain.addBlock("second block", "0")
blockchain.addBlock("third block", "0")
blockchain.addBlock("fourth block", "0")
blockchain.print();
// blockchain.corruptBlockchain()
// check if our blockchain is valid
console.log("is the blockchain valid: " + blockchain.validateBlockchain())