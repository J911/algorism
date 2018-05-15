const LCS = require('./LCS')

const str1 = "GOOD MORNING."
const str2 = "GUTEN MORGEN."

const l = new LCS(str1, str2)

console.log('LCS Max Length:',l.getMaxLength())
console.log('==== LCS Trace =====')
l.trace()