/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.index = 0;
    this.arr = [];
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.arr[idKey-1] = value;
    
    const results = [];
    if (this.index === (idKey-1)) {
        while(this.arr[this.index] !== undefined) {
            let data = this.arr[this.index];
            results.push(data);
            this.index++;
        }
    } 
    return results;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
