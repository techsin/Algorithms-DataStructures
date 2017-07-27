function isPrime(n) {
    let target = Math.sqrt(n),
        i = 2;
    for (let i = 2; i <= target; i++) {
        if (n % i == 0) return false;
    }
    return true;
}


/*

isPrime(1) //true
isPrime(2) //true
isPrime(3) //true
isPrime(4) //false
isPrime(5) //true
isPrime(6) //false
isPrime(7) //true
isPrime(8) //false
isPrime(9) //false
isPrime(10) //false
isPrime(11) //true
isPrime(12) //false
isPrime(13) //true
isPrime(14) //false

*/

