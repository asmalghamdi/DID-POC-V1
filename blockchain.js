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
        this.list.push(new Block(data, previousHash, 0, this.getCurrentBlockHeight()))
        console.log(this.list)

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

    // task 1 validate the blockchain

    // task 2 validate the block

    // task 3 add the mining functionality
}

const blockchain = new Blockchain();
blockchain.addBlock("second block", "0")
