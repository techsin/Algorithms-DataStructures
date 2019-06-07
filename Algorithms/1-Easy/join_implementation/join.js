Array.prototype.my_join = function(sep) {
	sep = sep || ',';
	let joined = '';
	for (let i=0; i < this.length; i++) {
		joined += this[i].toString();
		if (i != this.length-1) {
			joined +=sep;
		}
	}
	return joined;
}
