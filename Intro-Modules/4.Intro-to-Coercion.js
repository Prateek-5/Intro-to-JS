/**
 * Note in JS the char type does not exist
    Coersion stands for type interconversion
        Implicit    ->Manually we perform the operation of converting a type from one to another
        Explicit    ->The type conversion happens internally
    An comperision between the c++ and JS .Like in C++ if we difine the a virable as int a=45;
    We are basically spicifying in the memory that we need and a variable in the memory which will only store integer value 
    The same is not the case with JS in JS the bucket(the memory location) is not defined the the datatype of the var,const ot let
    But it is been defined by the value that we store in the particular variable 
    Like let a=17;
    and the a="Prateel"
 */

    //Example
    let a=17;
    console.log(a); //op 17
    a="Prateek";
    console.log(a); //op Prateek

/*
    Every this is an object in Javascript is a misleading statement
    The ECMAScript language types are Undefined, Null, Boolean, 
    String, Symbol, Number, and Object. An ECMAScript language 
    value is a value that is characterized by an ECMAScript language type.

    Every thing apart from the Primitive data type present in the above is an 
    Object

    Abstract Operations
        These operations are not a part of the ECMAScript language; they are defined here
        to solely to aid the specification of the semantics of the ECMAScript language. Other, more
        specialized abstract operations are defined throughout this specification.

        Basically in a nutshell the abstract operationas are the operation that the we an end user cannot 
        use these the the algorithms that the JS uses interanlly 


        Type Conversion
            The ECMAScript language implicitly performs automatic type conversion as needed. To clarify the semantics of 
            certain constructs it is useful to define a set of conversion abstract operations. The conversion abstract 
            operations are polymorphic; they can accept a value of any ECMAScript language type. But no other specification 
            types are used with these operations.
        
        This is the first Abstract operation that we are studying 
        ToPrimitive ( input [ , PreferredType ] )
            The abstract operation ToPrimitive takes an input argument and an optional argument PreferredType
            The abstract operation ToPrimitive converts its input argument to a non-Object type.
            If an object is capable of converting to more than one primitive type, it may use the optional 
            hint PreferredType to favour that type
            Assert: input is an ECMAScript language value. -->This line means that that input type is a valid ES object type
                    If Type(input) is Object, then -->Below Algo are applied if they are not an Premitive Datatype
                       --> If PreferredType is not present, let hint be "default".
                        Else if PreferredType is hint String, let hint be "string".
                        Else PreferredType is hint Number, let hint be "number".
                        Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
                        If exoticToPrim is not undefined, then
                            Let result be ? Call(exoticToPrim, input, « hint »).
                            If Type(result) is not Object, return result.
                            Throw a TypeError exception.
                       --> If hint is "default", set hint to "number".
                    Return ? OrdinaryToPrimitive(input, hint).
                    Return input. -->If the input is not an object then return the input directly as its an Premitive value 
            Notice the above steps if the default is still present then the hint is converted as the number
            

*/



console.log(10-{ a: 17, valueOf(){return "7"}});

console.log("74"+7);
console.log("71"+NaN);
