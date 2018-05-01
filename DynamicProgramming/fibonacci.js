const DP_Fibonacci = n => {
    let f = [1, 1];
    for(let i=2; i<n; i++) f.push(f[i-1]+f[i-2])
    return f[n-1]
}
const Recursive_Fibonacci = n => {
    if(n == 1 || n == 2) return 1
    return (Recursive_Fibonacci(n-1) + Recursive_Fibonacci(n-2))
}

module.exports = {
    DP_Fibonacci,
    Recursive_Fibonacci
}