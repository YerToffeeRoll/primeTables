
//Utilizes the sieve of Eratosthene to determine primality
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    const numberSqrt = Math.floor(Math.sqrt(n));
    let i = 2;
    while (i <= numberSqrt) {
        if (n % i === 0) {
            return false;
        }
        i += 1;
    }

    return true;
}


