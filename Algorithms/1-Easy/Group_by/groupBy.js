Array.prototype.groupBy = function(cb) {
	let obj = {};
	this.forEach(function(item){
		let result = cb(item);
		obj[result] = obj[result] || [];
		obj[result].push(item);
	})
	return obj;

}


Object.prototype.groupBy = function(cb){
	let obj = {};

	Object.entries(this).forEach(function(arr){
		let result = cb(...arr);
		obj[result] = obj[result] || [];
		obj[result].push(arr);
	})
	return obj;
};



/*
Results


vowels = ["a", "e", "i", "o", "u", "y"]
letters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

letters.groupBy(function(letter){
    return vowels.includes(letter);
}); 

// Object {true: Array(3), false: Array(7)}



foods = {"apple":1, "banana":2, "carrot":3, "durian":4}

foods.groupBy((food, count) => count > 2)
// Object {false: Array(2), true: Array(2)}


*/
