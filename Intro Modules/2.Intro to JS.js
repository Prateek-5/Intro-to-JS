console.log("Hello")
/*
The is the place where i will be documenting the whole project and the corresponding code for the same

Data types in JS
    Primitive DataTypes-Atomic

        Null
        Undefined
        boolean
        String
        Number
        Symbol
    Non Primitive DataTypes -Derived
        Objects
    Operators in JS
        typeof<vale> --return---> It will return the type of the corresponding value




*/ 

console.log(typeof "Prateek");
console.log(typeof 78);
console.log(typeof {name:"Prateek"});
console.log(typeof true);

/* In intresting corner case of the typeof operator */

console.log(typeof null); // It returns the value as object to be discussed in coersion
console.log(typeof undefined); //It return undefined only
console.log(typeof NaN);//Although its fullform is not a number but still it returns the type as number It will be discussed in the coersion


/*
    Notice in console.log it prints the output every time in a new lin whereas if we require the print
    the output in the same line then we can use the following its only available in Node
*/

process.stdout.write("hello");
process.stdout.write("word");

//Notice the output is in the same line


