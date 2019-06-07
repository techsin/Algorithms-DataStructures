Array.prototype.zip = function(){
	let args = Array.from(arguments);
	return this.map(function(v, i){
		let arr = [v];
		args.forEach(function(item){
			arr.push( item[i] || null);
		});
		return arr;
	});
};
