/*
    7.2.14Abstract Equality Comparison
        The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

            If Type(x) is the same as Type(y), then
            Return the result of performing Strict Equality Comparison x === y.  Look very closely at this point
            If x is null and y is undefined, return true.
            If x is undefined and y is null, return true.
            If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y). ignore the ! operator it's not the logical NOT operator
            If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
            If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
            If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
            If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
            If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
            Return false.


    7.2.15Strict Equality Comparison
            The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:

                If Type(x) is different from Type(y), return false.
                If Type(x) is Number, then
                If x is NaN, return false.
                If y is NaN, return false.
                If x is the same Number value as y, return true.
                If x is +0 and y is -0, return true.
                If x is -0 and y is +0, return true.
                Return false.
                Return SameValueNonNumber(x, y).


        Abstract Equality does coercion if types are not same strict equality never does coercion
        7.2.12SameValueNonNumber ( x, y )
                The internal comparison abstract operation SameValueNonNumber(x, y), where neither x nor y are Number values, 
                produces true or false. Such a comparison is performed as follows:

                Assert: Type(x) is not Number.
                    Assert: Type(x) is the same as Type(y).
                    If Type(x) is Undefined, return true.
                    If Type(x) is Null, return true.
                    If Type(x) is String, then
                    If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
                    If Type(x) is Boolean, then
                    If x and y are both true or both false, return true; otherwise, return false.
                    If Type(x) is Symbol, then
                    If x and y are both the same Symbol value, return true; otherwise, return false.
                    If x and y are the same Object value, return true. Otherwise, return false.



 */

console.log(undefined==null); //true as the the above table of the abstract comperision operator 
console.log(null==undefined);//true as per the above yable of the abstract comperision operator 

console.log(10=="10"); //output is true as the second operand is been converted into number ToNumber(y) is been called 
console.log("12"==10); //output is false as the 12 is been converted into a number and 12!=10 so false as output

console.log(true==1); //output is true as Type(x) is boolean so boolean is been converted in number and the compared with 1
console.log(false==1); //output is false as false->0==1 return false;
console.log(true=="1"); //true=="1"-->1 true ==1 returns true

console.log(10=={valueOf(){return 10}}) //op:true type of Type(x) is a Number,String,Symbol and Type(y) is an object so we call ToPrimitive(y) without hint

/*
    NaN(Not a Number)
        It actually does'nt actually mean not a number rather it give a notion of an invalid number
        Nan is the only primitive in JS which does not follow the identity property and it is not equalt to iteself 


*/

console.log(NaN==NaN); //op false 
/**
 * What happens is the Nan==Nan the following operation calles the strict equality at the back end and in according to the strict equalit 
 * if either of the openent is a NaN return false right away 
 */

/*
    The following property of the NaN brings a challange that if suppose a function might return a NaN value in it's return type
    the have will we validate that the following is a number or not .For that we have a function

    isNaN()
    NaN coerces the argument before chacking foe NaN in in that coercion if it encounters that the following argunment like a string 
    and when we try to corecion to a number the nornal string like "17"."19" will get easly converted to a valid number but string like
    "abc","Prateek" when converted to a number will give NaN as return which bring us the the challanges of the isNaN function


 */

console.log(isNaN(10-'c')); //true
console.log(isNaN("Prateek"));//Op:true which should not be the case

/**
    To overcome the following we have a solution which is Number.isNaN() which does not do coersion on string 

 */

console.log(Number.isNaN("abc")); //op:false see the following doest not conver the string "abc" to a valid number

/*
    Types of languages 
        Compiled typed lang  -->C++ is an example of a compiled typed lang
        Interprated Lang  -->shell script is an example of a Interprated lang
        Hybrid  -->Javascript is a hybrid lang as it does 2 phase first it complies and then it runs the code line by line
 */

/*
        Boxing
            A phenomina of converting primmitive values into objects

 */

console.log("abc".toString()); //An example og auto boxing the string gets automatically converted into an object
console.log(Number(9).toString()); //An example of manual boxing we explicitly convert the number into man object and the call toString();

//few variabtion of the above code
console.log(8..toString());
console.log((8).toString());
console.log(typeof (7).toString());//op:String