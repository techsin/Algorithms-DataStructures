var LRUCache = function(capacity) {
    this.hash = {};
    this.capacity = capacity;
    this.counter = 0;
};

LRUCache.prototype.get = function(key) {
    const obj = this.hash[key];
    
    if (typeof obj === "undefined") {
        return -1;
    } else {
        obj.index = ++this.counter;
        return obj.val;
    }
};

LRUCache.prototype.put = function(key, value) {
    const {capacity, hash} = this;
    
     if (typeof hash[key] !== "undefined") {
         hash[key].val = value
         hash[key].index = ++this.counter;
     } else {
         
        if (capacity > 0) {
            this.capacity--;
        } else {
            const oldestKey = this.getOldestKey();
            delete hash[oldestKey];
        }

         hash[key] = {val: value, index: ++this.counter };
         
     }

};

LRUCache.prototype.getOldestKey = function(){
    let min = Number.POSITIVE_INFINITY;
    let tempKey = null;
    
    for (const key in this.hash) {
        const {index} = this.hash[key];
        if (index < min) {
            min = index;
            tempKey = key;
        }
    }
    
    return tempKey;
};
