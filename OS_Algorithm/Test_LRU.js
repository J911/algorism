const LRU = require('./LRU')

dataset = [7 ,2 ,3, 1, 2, 5, 3, 4, 6, 7, 7, 1, 0, 5, 4, 6, 2, 3, 0, 1];
const lru = new LRU(4)

for(i in dataset){
    lru.load(dataset[i])
}
