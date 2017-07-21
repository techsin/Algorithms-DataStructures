Array.prototype.and = function(arr){
    return this.filter(x => arr.includes(x));
};



Array.prototype.not = function(arr){
    return this.filter(x => !arr.includes(x));  
};
