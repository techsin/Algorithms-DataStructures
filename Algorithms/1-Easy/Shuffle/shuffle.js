Array.prototype.shuffle = function(){
    let len = this.length;
	while (--len > 0) {
		// ~~ == floor, Math.random() == 0 .. 0.9
    	let j = ~~(Math.random() * (len + 1));
    	[this[j],this[len]] = [this[len],this[j]]
	}
    return this;
};



[1,2,3].shuffle() //[3, 1, 2]
[1,2,3].shuffle() //[3, 1, 2]
[1,2,3].shuffle() //[2, 3, 1]
[1,2,3].shuffle() //[2, 1, 3]
[1,2,3].shuffle() //[2, 3, 1]
