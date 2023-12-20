/**
 *  Comperision operators 
 *      <   Greater than    <= Greater than equal to
 *      >   Less than       >= Less than equal to
 *      ==  and ===
 *      != and !==
 *      String based operators 
 *          +
 *      It's basically used to concatenate 2 strings 
 *  
 */
console.log(5 & 3); // op 1
console.log(5<<2); // 20 
console.log(5 | 2); // 7
console.log(5 ^ 5); // 0
console.log(-0);
console.log(-0<<1); //Output is 0

/**
 *  Functions in JS
 *      Unlike c/c++ we do not require to specify the return type in a function
 */

function abc(x){
    console.log(x*3);
    return x;
    console.log(x*2); //It is unreacheable code becaus the function execution stops as soon as we encounter the return statement
}


console.log(abc(45));
console.log(typeof console.log(5)); //Notice the retunr type of console.log is undefined 