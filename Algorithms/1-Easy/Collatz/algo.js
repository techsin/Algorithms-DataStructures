// Incomplete


function even_next(n) {
	return n/2;
}

function odd_next(n) {
	return 3*n+1;
}

function next_value(n) {
	if (n%2==0) {
		return even_next(n);
	}
	return odd_next(n);
}


function collatz(n) {
	let arr = [];
	while (n !== 1) {
		n = next_value(n);
		arr.push(n);
	}	
	return arr;
}



function longest_collatz() {
	const million = 1000;
	let arr = [];
	let longest = 0;
	for (let i = million; i > 0; i--) {
		let n = next_value(i);
		if (!arr.includes(n)) {
			console.log(arr, n);
			arr = collatz(n);
			longest = i;
		} 
	}
	return longest;	
}





//if it's prime and not 2 then it's odd. since it's odd previous was not odd as 3n+1 would have made this even.
//tldr: prime -> prev == even

// function prev_value(n) {
// 	let even = even_prev(n);
// 	let odd = odd_prev(n);
// 	if (isPrime(n))	{
// 		return even;
// 	} else {
// 		if (next_value(even)==n) {
// 			return even;
// 		} else {
// 			return odd;
// 		}
// 	}
// }

// function even_prev(n) {
// 	return n*2;
// }

// function odd_prev(n) {
// 	return (n-1)/3
// }







//odd x odd = odd, so 3n+1 makes sure it's even so next call would be n/2 thus collatz always goes down from target number
//given all primes would be below target we can precalculate or calculate once instead of finding prime each time form zero.
// function isPrime(n) { 
// 	if (n !== 1) {
// 		for (let i = 2; i <= Math.sqrt(n); i++) { 
// 			if (n % i == 0) return false;
// 		}
// 	} 
// 	return true;
// }



// collatz(31).map(x=>  



