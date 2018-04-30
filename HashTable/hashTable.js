/**
 * project: Hash Table
 * writter: Jaemin Lee
 * language: JavaScript
 */

const Node = require('./node')

class HashTable {
    constructor(_size) {
        this.table = []
        this.hashKey = _size
        for(let i=0;i<_size;i++) this.table.push(null)
    }
    addNode(_newNode) {
        const index = _newNode.key % this.hashKey
        _newNode.nextNode = this.table[index]
        this.table[index] = _newNode
    }
    removeNode(_key) {
        this.findPrevNode(_key).nextNode = this.findNode(_key).nextNode
    }
    findNode(_key, _target) {
        if(_target == undefined) _target = this.table[_key % this.hashKey]
        if(_target == null) return null
        if(_target.key == _key) return _target
        return this.findNode(_key, _target.nextNode)
    }
    findPrevNode(_key, _target) {
        if(_target == undefined) _target = this.table[_key % this.hashKey]
        if(_target == null || _target.nextNode == null) return null
        if(_target.nextNode.key == _key) return _target
        return this.findNode(_key, _target.nextNode) 
    }
}

module.exports = HashTable