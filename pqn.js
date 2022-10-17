
let p = 7727;
let q = 7703; 
//My original q was 7741, because I couldn't figure out how to generate
// prime numbers, so I started with two prime numbers I just googled.
//The two numbers above are in the array created in the prime.js file

let n = p * q;
console.log(`n = ${n}`);

let totient = (p-1)*(q-1);
console.log(`totient = ${totient}`);


/*
*********************************************
*    Title: How to calculate greatest common divisor of two or more numbers/arrays in JavaScript ?
*    Author: swapnil074 (https://auth.geeksforgeeks.org/user/swapnil074)
*    Date: 4/22/2021
*    Code version: JavaScript
*    Availability: https://www.geeksforgeeks.org/how-to-calculate-greatest-common-divisor-of-two-or-more-numbers-arrays-in-javascript/
*********************************************
*/

 // Function to return gcd of random e and totient
 // parameter b = totient
 // parameter a = e
 function gcd(a, b) {
    if (a === 0)
        return b;
    return gcd(b % a, a);
}

let e;
let testGCD = 0;

do {
    e = Math.floor(Math.random()*totient);
    console.log(`test e = ${e}`);
    testGCD = gcd(totient,e);
    console.log(`testGCD = ${testGCD}`);
} 
while(testGCD !== 1);

console.log(`finalGCD = ${testGCD}, final e = ${e}`);

/*
*********************************************
*    Title: JavaScript: Calculate the extended Euclid Algorithm or extended GCD
*    Author: w3resource
*    Date: 8/19/2022
*    Code version: JavaScript
*    Availability: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-47.php
*********************************************
*/


function Euclid_gcd(a, b) {
    a = +a;
    b = +b;
    if (a !== a || b !== b) {
      return [NaN, NaN, NaN];
    }
    
    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
      return [Infinity, Infinity, Infinity];
    }
    // Checks if a or b are decimals
    if ((a % 1 !== 0) || (b % 1 !== 0)) {
      return false;
    }
    var signX = (a < 0) ? -1 : 1,
      signY = (b < 0) ? -1 : 1,
      x = 0,
      y = 1,
      u = 1,
      v = 0,
      q, r, m, n;
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (a !== 0) {
      q = Math.floor(b / a);
      r = b % a;
      m = x - u * q;
      n = y - v * q;
      b = a;
      a = r;
      x = u;
      y = v;
      u = m;
      v = n;
    }
    return [b, signX * x, signY * y];
  }
  
  let oneXY = Euclid_gcd(e, totient);
  let finalD = oneXY[1];
  console.log(oneXY.toString());
  console.log(`p = ${p}, q = ${q}, n = ${n}, e = ${e}, totient = ${totient}, d = ${finalD}`)
  