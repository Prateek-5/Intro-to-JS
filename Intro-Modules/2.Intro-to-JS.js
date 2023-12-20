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

/*
    Variable in JS
        let basic syntex let <variable_name> =<value>;
        var
        const
    The follwing are keywords in Javascript
        There are difference between then which we will discuess in scopes lecture


*/


let x=10;
const username="Prateek";
var age=26;
//username="Prasan";-->The following operation is not allowed as we can not reassign the const variable 

console.log(x,username,age);

/*
    Assignment operator 
        var a+=2  --> a=a+2;
        var a-=2
            a/=2  -->a=a/2;  
            a*=2  -->a=a*2;  
            a%=2
        An important thing ot note is that if want to divide any number and then keep its floor value the we can us the 
        following ways 
            1st way-->parseInt(5/2);
            2nd way-->Math.floor(5/2);
*/

    console.log(5/2); //output 2.5
    console.log(parseInt(5/2)); //Output 2
    console.log(Math.floor(5/2));   //Output 2

/**
 *      Logical operators
 *          AND --> &&  If the first expression is true it returns the second expression
 *          OR  --> ||  If the first expression is true it returns the first expression only
 *          NOT --> !
 */

//In intresing case
    console.log(3 && 4); //It returns the larger value op 4 the second expression  
    console.log(3 || 4); //It returns the smaller value op 3 the first expression regardless of the fact that we have a largervalue in 2nd exp 
    console.log(4 || 3 );  //Its returning the first value 



