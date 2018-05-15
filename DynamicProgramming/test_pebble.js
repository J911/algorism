const pebble = require('./pebble')
let p = new pebble([
    [6,7,12,-5,5,3,11,3],
    [-8,10,14,9,7,13,8,5],
    [11,12,7,4,8,-2,9,4],
])

console.log('pebble Max:',p.max)
console.log('==== patten Trace =====')
p.tracePeb()