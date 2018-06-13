const makeGraph = function(map) {
    map.graph.forEach(node => {
        node.link.forEach((link, idx) => {
            if(link.node.value == null) 
                link.node.value = node.value + link.cost;
            else if(link.node.value > node.value + link.cost)
                link.node.value = node.value + link.cost;
            else 
                node.link.splice(idx, 1);
        })
    });
}

module.exports = makeGraph;