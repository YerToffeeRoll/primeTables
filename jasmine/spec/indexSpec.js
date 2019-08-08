describe("Primes multiplcation table", function() {
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
      let test2 = [ 2 ];
      let test3 = [2,3,5,7,11,13];
      expect(getPrimes(0)).toEqual(test1);
      expect(getPrimes(2)).toEqual(test2);
      expect(getPrimes(13)).toEqual(test3);
    });
  });



});

