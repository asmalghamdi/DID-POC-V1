import { Block } from './block.js'
import sha256 from "crypto-js/sha256.js"
class Blockchain {
    list = []
    constructor() {
         if (this.list.length == 0) {
            this.list.push(new Block("Genesis Block", "N/A", 0, 0))
        }

     }

    addBlock(data) {
        const previousHash = this.getPerviousBlockHash()

         let block = new Block(data, previousHash, 0, this.getCurrentBlockHeight())
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

     validateBlockchain() {
         for (let i = 1; i < this.list.length; i++) {  
             if (!this.validateBlock(this.list[i])) {  
                return false  
            }
             if (this.list[i].previousHash != this.list[i - 1].hash) {  

                return false
            }
        }
        return true
    }
    corruptBlockchain() {
         let randomBlock = this.list[Math.floor(Math.random() * this.list.length)]
         randomBlock.data = "corrupted data"

    }
    mine(block) {
        for (let i = 0; i < 10_000_000; i++) {  
            let magicHash = sha256(block.data + i).toString();  
            if (magicHash.startsWith("000")) {  
                block.nonce = i  
                block.hash = magicHash  
                break  
            }
        }
        return block
    }

    validateBlock(Block) {

   
        let hash = Block.hash  

        let calculatedHash = sha256(Block.data + Block.nonce)  
        return (hash == calculatedHash)  
    }

}

const blockchain = new Blockchain();
 blockchain.addBlock("2ed block", "0")
blockchain.addBlock("3ed block", "0")
blockchain.addBlock("4th block", "0")
blockchain.print();
 
console.log("Test " + blockchain.validateBlockchain())