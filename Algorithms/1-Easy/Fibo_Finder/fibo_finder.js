function fibo_finder(n) {
	if (n < 2) {
		return n;
    }
	return fibo_finder(n-1)+fibo_finder(n-2);
}

console.log(fibo_finder(1)); //1
console.log(fibo_finder(2)); //1
console.log(fibo_finder(3)); //2
console.log(fibo_finder(4)); //3
console.log(fibo_finder(5)); //5
console.log(fibo_finder(6)); //8
console.log(fibo_finder(7)); //13
