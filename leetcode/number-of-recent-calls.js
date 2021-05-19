
var RecentCounter = function() {
    this.log = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.log.push(t);
    
    const min = t - 3000;    
    let counter = 0;
    
    for (let i = this.log.length - 1; i > -1; i--) {
        if (this.log[i] >= min) {
            counter++
        } else {
            break;
        }
    }

    return counter;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
