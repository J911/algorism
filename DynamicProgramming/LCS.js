class LCS {
    constructor (s1, s2) {
        this.str = [s1, s2]
        this.C = []
        this.maxLength = this.getMaxLength
    }
    getMaxLength() {
        for(let i=0;i<=this.str[0].length;i++){
            let t = [] //temp array
            for(let j=0;j<=this.str[1].length;j++)
                t.push(0)
            this.C.push(t)
        }
        for(let i=0;i<=this.str[0].length;i++) this.C[i][0] = 0
        for(let i=0;i<=this.str[1].length;i++) this.C[0][i] = 0
        for(let i=1;i<=this.str[0].length;i++) 
            for(let j=1;j<=this.str[1].length;j++)
                if(this.str[0][i-1] == this.str[1][j-1]) this.C[i][j] = this.C[i-1][j-1] + 1
                else this.C[i][j] = this.C[i-1][j] < this.C[i][j-1] ? this.C[i][j-1] : this.C[i-1][j]
        return this.C[this.str[0].length][this.str[1].length];
    }
    trace() {
        let pot = []
        let i = this.str[0].length
        let j = this.str[1].length
        while(i != 0 && j != 0) {
            if(this.C[i][j] > this.C[i-1][j-1]){
                i--
                pot.push(this.str[1][j-1])
            }
            j--
        }
        console.log(pot.reverse())
    }
}
module.exports = LCS
