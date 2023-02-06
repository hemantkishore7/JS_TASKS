//Anonymous Function

let getPrime = function(num) {
    let primes = [];
    for (let i = 2; i <= num; i++ ){
        let isPrime =true;
        for(let j= 2 ; j < i ; j++){
            if(i%j===0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
          primes.push(i)
        }
    }
 console.log(primes);
}
let n = 10
getPrime(n);



//IIFE - Function 


(function(num){
    let primes = [];
    for (let i = 2; i <=num; i++ ){
        let isPrime =true;
        for(let j= 2 ; j < i ; j++){
            if(i%j===0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
          primes.push(i)
        }
    }
 console.log(primes);
})(20);



//Arrow Function

let getPrime2 = (num) =>{
    let primes = [];
    for (let i = 2; i <=num; i++ ){
        let isPrime =true;
        for(let j= 2 ; j < i ; j++){
            if(i%j===0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
          primes.push(i)
        }
    }
 console.log(primes);
}

getPrime2(50);