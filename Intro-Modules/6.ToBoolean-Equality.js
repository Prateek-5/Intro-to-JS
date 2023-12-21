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


