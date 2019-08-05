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



});

