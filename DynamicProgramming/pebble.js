class pebble {
    constructor (map){
        this.map = map
        this.peb = this.peb_INIT()
        this.max = this.getMax()
    }
    pebble_policy (n) {
        switch(n) {
            case 0: return {
                index: [0],
                prev: [1, 2]
            }
            case 1: return {
                index: [1],
                prev: [0, 2, 3]
            }
            
            case 2: return {
                index: [2],
                prev: [0, 1]
            }
            
            case 3: return {
                index: [0,2],
                prev: [1]
            }
        }
    }
    getMax() {
        let max = 0
        for(let i=0;i<4;i++)
            for(let j=0;j<this.map[0].length;j++) this.peb[i].push(0)
        
        for(let p=0;p<4;p++) {
            this.pebble_policy(p).index.forEach(idx => {
                this.peb[0][p] += this.map[idx][0]
            })
        }

        for(let i=1;i<this.map[0].length;i++)
            for(let p=0;p<4;p++){
                let temp_peb = [];
                this.pebble_policy(p).prev.forEach(pv => {
                    temp_peb.push(this.peb[i-1][pv])
                })
                this.peb[i][p] = temp_peb[0];
                for(let j=0;j<temp_peb.length-1;j++){
                    this.peb[i][p] = temp_peb[j] < temp_peb[j+1] ? temp_peb[j+1] : this.peb[i][p]
                }
                this.pebble_policy(p).index.forEach(idx => {
                    this.peb[i][p] += this.map[idx][i]
                })
            }
        for(let i=0;i<this.map[0].length; i++)
            for(let j=0;j<4;j++)
                max = max < this.peb[i][j] ? this.peb[i][j] : max
        return max
    }
    peb_INIT() {
        let peb = []
            for(let i=0;i<this.map[0].length;i++) peb.push([])
        return peb
    }
    tracePeb(peb, n) {
        let patten = 0
        let max = 0
        for(let i=0;i<this.map[0].length; i++){
            for(let j=0;j<4;j++){
                patten = max < this.peb[i][j] ? j : patten
                max = max < this.peb[i][j] ? this.peb[i][j] : max
            }
            console.log(`-> patten${patten+1}`)
            max = 0
        }
    }
}

module.exports = pebble