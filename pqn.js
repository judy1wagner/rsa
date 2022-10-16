


let p = 7727;
let q = 7741;

let n = p * q;
console.log(`n = ${n}`);

let totient = (p-1)*(q-1);
console.log(`totient = ${totient}`);

/****************************************************
 * https://www.geeksforgeeks.org/how-to-calculate-greatest-common-divisor-of-two-or-more-numbers-arrays-in-javascript/
 * 
 ****************************************************
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
    console.log(e);
    testGCD = gcd(totient,e);
    console.log(testGCD);
} 
while(testGCD !== 1);

console.log(e);