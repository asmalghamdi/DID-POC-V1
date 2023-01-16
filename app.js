class Block {
    hash
    data
    previousHash
    nonce
    height
    timestamp
    constructor(hash, data, previousHash, nonce, height) {
        this.hash = hash // change it to the hash function
        this.data = data
        this.previousHash = previousHash
        this.nonce = nonce
        this.height = height
        this.timestamp = new Date()

    }

    Hash() {
        // sha256 
        // takes the data and gets its hash.
    }
}

let block = new Block('hash', 'data', 'previousHash', 1, 1)



