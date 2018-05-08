const fibonacci = require('./fibonacci')

let DP_Fibonacci = []
let Recursive_Fibonacci = []
let Memo_Fibonacci = []

const loop = (n, fn) => {
    for(i=1;i<n;i++) fn(i)
}
console.time('DP_Fibonacci')
loop(11, i => DP_Fibonacci.push(fibonacci.DP_Fibonacci(i)))
console.log(DP_Fibonacci)
console.timeEnd('DP_Fibonacci')

console.time('Recursive_Fibonacci')
loop(11, i => Recursive_Fibonacci.push(fibonacci.Recursive_Fibonacci(i)))
console.log(Recursive_Fibonacci)
console.timeEnd('Recursive_Fibonacci')


console.time('Memo_Fibonacci')
loop(11, i => Memo_Fibonacci.push(fibonacci.Memo_Fibonacci(i)))
console.log(Memo_Fibonacci)
console.timeEnd('Memo_Fibonacci')
