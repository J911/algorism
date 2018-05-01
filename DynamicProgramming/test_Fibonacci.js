const fibonacci = require('./fibonacci')

console.time('DP_Fibonacci')
console.log(fibonacci.DP_Fibonacci(40))
console.timeEnd('DP_Fibonacci')

console.time('Recursive_Fibonacci')
console.log(fibonacci.Recursive_Fibonacci(40))
console.timeEnd('Recursive_Fibonacci')
