
//Step 1 - generate all prime numbers up to a certain number

const limit = 10;
let primes = [];

//for(num = 4; num < limit; num++){
    //true means prime
    //false means composite
    
    //find num-1 = 2**k * m

    let num = 31;
    let i = 1;
    let m = 0;
    while(m/parseInt(m)===0){ //tests if m is an integer, because if it's not an integer, 
        //there will be numbers after the decimal, so m/parse(Int) will result in decimal numbers
        m = (num - 1) / (2**(i));
        i = i + 1;
        console.log(m);
    }

//}