const DP_Fibonacci = n => {
    let f = [1, 1];
    for(let i=2; i<n; i++) f.push(f[i-1]+f[i-2])
    return f[n-1]
}
const Recursive_Fibonacci = n => {
    if(n == 1 || n == 2) return 1
    return (Recursive_Fibonacci(n-1) + Recursive_Fibonacci(n-2))
}
const Memo_Fibonacci = (n, f=[]) => {
    if(f.length == 0){
        for(i=0;i<n;i++) f.push(0)
        n--
    }
    if(f[n] !== 0) return f[n]
    else {
        if(n == 0 || n == 1) f[n] = 1
        else f[n] = Memo_Fibonacci(n-1,f) + Memo_Fibonacci(n-2,f)
        return f[n]
    }
}
module.exports = {
    DP_Fibonacci,
    Recursive_Fibonacci,
    Memo_Fibonacci
}