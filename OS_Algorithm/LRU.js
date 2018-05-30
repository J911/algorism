class Node {
    constructor(_v) {
        this.value = _v;
    }
}

class LRU {
    constructor(_s) {
        this.count = 0
        this.buffer = []
        this.bufferSize = _s 
    }
    load(_v) {
        this.count++
        const newNode = new Node(_v)
        const idx = this.getConfilctNode(newNode)
        if(idx !== -1) {
            this.buffer[idx].count = this.count
        }
        else{
            newNode.count = this.count
            if(this.buffer.length < this.bufferSize){ 
                this.buffer.push(newNode)
            }
            else{
                let minIdx = 0;
                for(let i=0;i<this.bufferSize;i++)
                    minIdx = this.buffer[minIdx].count > this.buffer[i].count ? i : minIdx
                this.buffer[minIdx] = newNode
            }
        }
        return this.printBuffer()
    }
    getConfilctNode(newNode) {
        for(let i=0;i<this.buffer.length;i++)
            if(newNode.value == this.buffer[i].value) return i
        return -1
    }
    printBuffer() {
        process.stdout.write(`TIME ${this.count}: `)
        this.buffer.forEach(node => process.stdout.write(`${node.value} `))
        console.log("")
    }
}

module.exports = LRU
