describe("isPrime", function () {
    it("determines if a given integer is prime", function () {
        expect(isPrime(0)).toBe(false);
        expect(isPrime(1)).toBe(false);
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(13)).toBe(true);
        expect(isPrime(99)).toBe(false);
        expect(isPrime(105943)).toBe(true);
    });
});

describe("getPrimes", function () {
    it("determines if a given integer can create a prime table", function () {
        let test1 = [];
        let test2 = [2];
        let test3 = [2, 3, 5, 7, 11, 13];
        expect(getPrimes(0)).toEqual(test1);
        expect(getPrimes(2)).toEqual(test2);
        expect(getPrimes(13)).toEqual(test3);
    });
});

describe("multiplyPrimes", function () {
    it("generates an array of arrays, corresponding to table rows", function () {
        expect(multiplyPrimes([])).toEqual(null);
        expect(multiplyPrimes([2])).toEqual([[null, 2], [2, 4]]);
        expect(multiplyPrimes([2, 3])).toEqual([[null, 2, 3], [2, 4, 6], [3, 6, 9]]);
        expect(multiplyPrimes([2, 3, 5, 7])).toEqual([[null, 2, 3, 5, 7], [2, 4, 6, 10, 14], [3, 6, 9, 15, 21],
            [5, 10, 15, 25, 35], [7, 14, 21, 35, 49]]);
        expect(multiplyPrimes([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])[10][10]).toEqual(841);
    });
});



