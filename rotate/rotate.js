Array.prototype.rotate = function() {
	return [this[this.length-1]].concat(this.slice(0,-1));
}


a //[1, 2, 3, 4]
a.rotate() //[4, 1, 2, 3]
a.rotate().rotate() //[3, 4, 1, 2]
