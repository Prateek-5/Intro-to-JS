/**
    ToBoolean
        The ToBoolean converts the given value to Boolean value which is a bit different from 
        ToString and ToNumber
        It maintains a list of value which when received as an argument will return false 
        and rest of the other values as true
    ToBoolean ( argument )
        The abstract operation ToBoolean converts argument to a value of type Boolean according to Table 9:

        Table 9: ToBoolean Conversions
            Argument Type	Result
            Undefined	Return false.
            Null	Return false.
            Boolean	Return argument.
            Number	If argument is +0, -0, or NaN, return false; otherwise return true.
            String	If argument is the empty String (its length is zero), return false; otherwise return true.
            Symbol	Return true.
            Object	Return true.
        

 */

console.log(!0); //0 is present in the list of falsy values above is it's false and the opposit of false is true

console.log(!-4); //op false -4 is not present in the list of flasy values hence its return true and the oopsit of true is false

console.log(!{}); //object is a truthy value hence the opposit of true will be false;

console.log(!undefined);// undefined is a flasy value as it is present in the list hence it will return true 

console.log(!console.log(!0)); 
/*
    The inner console log will print true as zero is a flasy value and the outter console log will 
    print as true only because the inner console.log will return underfined as its return type 
*/

/*
    7.2.14Abstract Equality Comparison
        The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

            If Type(x) is the same as Type(y), then
            Return the result of performing Strict Equality Comparison x === y.  Look very closely at this point
            If x is null and y is undefined, return true.
            If x is undefined and y is null, return true.
            If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
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

console.log(NaN===NaN); //op false in JS NaN is the only operent which is not equal to itself

//console.log({a:7}==={a:7}); //because the memory location is different return false
x={a:7};

console.log(x===x); //op true
console.log(Symbol("prateek")===Symbol("prateek")); //false
y=Symbol("prateek")
console.log(y===y); //true
