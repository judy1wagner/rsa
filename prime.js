
//this file creates an array of prime numbers, although it doesn't 
//include all prime numbers and does contain Carmichael values

/*
*********************************************
*    Title: Miller Rabin Primality test steps with example in Cryptography Solved example to check prime numbers
*    Author: Parinita Hajra, Assistant Professor at JECRC University, Jaipur
*    Date: July 14, 2019
*    Code version: n/a
*    Availability: https://www.youtube.com/watch?v=RNxr7km8lHo
*********************************************
*/


//test a number to see if it's prime
//find m with k = 1
//n-1 = m * 2^k
let n = BigInt(1);
let k = BigInt(1); 
let a = BigInt(2);
let one = BigInt(1);
let m = BigInt((n-one)/a);
console.log(m);
let primes = [];


//if k <= 1: calculate T, T = a^m % n 

let t = BigInt((a**m) % n);
console.log(t);

for (let i = BigInt(1); i < 10000; i = i + one){
    m = (i-one)/a;
    t = (a**m) % i;
    if(t === one){
        primes.push(i);
    }
}
console.log(primes.toString());




