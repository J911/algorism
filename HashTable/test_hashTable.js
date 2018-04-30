const Node = require('./node')
const HashTable = require('./hashTable')

const hashTable = new HashTable(10)

// add Nodes
hashTable.addNode(new Node(20))
hashTable.addNode(new Node(21))
hashTable.addNode(new Node(24))
hashTable.addNode(new Node(34))
hashTable.addNode(new Node(25))
hashTable.addNode(new Node(41))

// show hashTable
console.log("Show table: \n", hashTable.table)

// find Node
console.log("Find 24: ", hashTable.findNode(24))

//remove Node
console.log("Remove 24: ", hashTable.removeNode(24))

// show hashTable
console.log("Show table: \n", hashTable.table)
