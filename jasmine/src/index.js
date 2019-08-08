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

//Utilizes the sieve of Eratosthene to create table
function getPrimes(max) {
    let sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);

            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

function getStarted() {

    //basic initialising and  interfacing of variables
    let text = document.getElementById('input1').value;
    let tbl = document.createElement('table'),
        tbd = tbl.appendChild(document.createElement('tbody')),
        tr, td, i, found = 0;

    if (isPrime(text)) {
        //if input is a prime, then we can get the table
        let primedata = getPrimes(text);

        if (primedata) {
            for (i in primedata) {
                // if the number of found numbers is a multiple of 10, start a new row
                // the first prime we find will be "number 0", which is divisible by 10.
                if (found % 10 == 0) tr = tbd.appendChild(document.createElement('tr'));
                td = tr.appendChild(document.createElement('td'));
                td.appendChild(document.createTextNode(primedata[i]));
                found++
            }
            if (found % 10 != 0) {
                td = tr.appendChild(document.createElement('td'));
                td.colSpan = 10 - found % 10;
            }
            document.body.appendChild(tbl);
            tbl.setAttribute("border", 1);
        }
    } else {
        document.getElementById('output').append('Not a prime number');
    }
}


