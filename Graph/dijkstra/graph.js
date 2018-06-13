class Node {
    constructor (name, value = null) {
        this.name = name;
        this.value = value;
        this.link = [];
    }
    makeLink(node, cost) {
        this.link.push(
            {
                node,
                cost
            }
        );
    }
}

class Graph {
    constructor() {
        this.graph = [];
    }
    addNode(node) {
        this.graph.push(node);
    }
    printGraph() {
        this.graph.forEach(node => {
            console.log("-----------------")
            console.log(node.name);
            node.link.forEach(link => {
                console.log("LINK" + link.node.name + link.cost);
            })
        })
    }
}

module.exports = {
    Node, 
    Graph
}