const getCost = (m, c) => {
    c[0][0] = m[0][0]
    for(let i=1; i<4; i++) c[i][0] = m[i][0] + c[i-1][0]
    for(let i=1; i<4; i++) c[0][i] = m[0][i] + c[0][i-1]
    for(let i=1; i<4; i++)
        for(let j=1; j<4; j++){
            max = c[i][j-1] > c[i-1][j] ? c[i][j-1] : c[i-1][j]
            c[i][j] = m[i][j] + max
        }
    return c
}

const findPath = (m, c) => {
    let i = 3
    let j = 3
    let path = [[3,3]];
    while(i !==0 || j !==0 ){
        if(i == 0) j -= 1
        else if(j == 0) i -= 1
        else{
            c[i][j-1] > c[i-1][j] ? j -= 1 : i -= 1
        }
        path.push([i,j])
    }
    return path.reverse()
}

const matrix = [
    [6, 7, 12, 5],
    [5, 3, 11, 18],
    [7, 17, 3, 3],
    [8, 10, 14, 9]
]
let cost = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

console.log('Cost: ', getCost(matrix, cost))
console.log('Path: ', findPath(matrix, cost))