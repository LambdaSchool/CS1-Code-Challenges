/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */

 /* return true if num is prime.
    otherwise return false */

const isPrime = function(num) {
  if (num < 2) {return false;}
  else if (num === 2) {return true;}
  else if (num % 2 === 0) {return false;}
  else if (num >= 3) {
    for (var i = 2; i < Math.sqrt(num + 1); i++) { // Maybe a ceiling would work better (but slower?)?
      if (num % i === 0) {
        return false;
      }
    }
  } return true;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= num; i++) { // <-- i < num/2 or Math.sqrt(num) for speed
    if ( num % i == 0 && i != num) {
      return false;
    } else {
      return true;
    }
  }
}
