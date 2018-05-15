const pebble = require('./pebble')
let p = new pebble([
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
])

console.log('pebble Max:',p.max)
console.log('==== patten Trace =====')
p.tracePeb()