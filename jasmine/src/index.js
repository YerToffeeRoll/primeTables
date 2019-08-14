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

//Utilizes the sieve of Eratosthene to create primes array
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

// Store first n primes, use isPrime to determine if a given number is prime
function generatePrimesArray(max) {
    let primes = [];
    let i = 0;

    while (primes.length < max) {
        if (this.isPrime(i)) {
            primes.push(i);
        }

        i += 1;
    }

    return primes;
}



// Complete multiplication of primes to fill table
function multiplyPrimes(primesArray) {
    if (primesArray.length === 0) {
        return null;
    }

    let firstArray = [null].concat(primesArray);
    let multipliedPrimes = [firstArray];

    primesArray.forEach(function (prime) {
        let newRow = [prime];
        primesArray.forEach(function (primeToMultiplyBy) {
            newRow.push(prime * primeToMultiplyBy);
        });

        multipliedPrimes.push(newRow);
    });

    return multipliedPrimes;
}

// Display table with the values from multiplyPrimes()
function displayTable(multipliedPrimes) {


    let tbl = document.createElement('table'),
        tbd = tbl.appendChild(document.createElement('tbody')),
        tr, td, i, found = 0;
    //run through the arrays and print out a nice wee table
    multipliedPrimes.forEach(function (array) {
        tr = tbd.appendChild(document.createElement('tr'));
        array.forEach(function (primepro) {
            td = tr.appendChild(document.createElement('td'));
            td.appendChild(document.createTextNode(primepro))
        });
    });

    document.body.appendChild(tbl);
    tbl.setAttribute("border", 1);


}

function getStarted() {

    //if input is a prime, then we can get the table
    //basic initialising and  interfacing of variables
    let text = document.getElementById('input1').value;

        let primedata = generatePrimesArray(text);
        let multipliedPrimes = this.multiplyPrimes(primedata);
        this.displayTable(multipliedPrimes);

}


