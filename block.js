// const sha256 = require('crypto-js/sha256');
import sha256 from "crypto-js/sha256.js"
export class Block {
    hash
    data
    previousHash
    nonce
    height
    timestamp
    constructor(data, previousHash, nonce, height) {
        this.hash = this.Hash(data)
        this.data = data
        this.previousHash = previousHash
        this.nonce = nonce
        this.height = height
        this.timestamp = new Date()

    }
    print() {
        console.log(this)
    }
    Hash(data) {
        console.log()
        return sha256(data).toString()
    }
}

export default function createGenesisBlock() {
    return new Block("Genesis Block", "0", 0, 0)
}

