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
                    Return ? OrdinaryToPrimitive(input, hint).  ->Once we have finiallized the hint we call the following method (look below )

                    Return input. -->If the input is not an object then return the input directly as its an Premitive value 
            Notice the above steps if the default is still present then the hint is converted as the number


            OrdinaryToPrimitive ( O, hint )
                When the abstract operation OrdinaryToPrimitive is called with arguments O and hint, the following steps are taken:

                    Assert: Type(O) is Object. 
                    Assert: Type(hint) is String and its value is either "string" or "number". -->The above 2 steps are to detarmine we have valid args
                        If hint is "string", then
                        Let methodNames be « "toString", "valueOf" ».
                        Else,
                        Let methodNames be « "valueOf", "toString" ».
                        For each name in methodNames in List order, do
                        Let method be ? Get(O, name).
                        If IsCallable(method) is true, then
                        Let result be ? Call(method, O).
                        If Type(result) is not Object, return result.
                        Throw a TypeError exception.

        An important discussion regarding the above algo if the hint/PrefferedType is an String then
            first we call the methods in the following order
                toString -->If we received a premitive after the toString ops the we then and there stop the function else we call the below function
                valueOf
        An important discussion regarding the above algo if the hint/PrefferedType is an Number then
            first we call the methods in the following order
                valueOf     
                toString
        7.1.12ToString ( argument )
            The abstract operation ToString converts argument to a value of type String according to Table 11:

                    Table 11: ToString Conversions
                    Argument Type	Result
                        Undefined	Return "undefined".
                        Null	Return "null".
                        Boolean	
                        If argument is true, return "true".

                        If argument is false, return "false".

                        Number	Return NumberToString(argument).
                        String	Return argument.
                        Symbol	Throw a TypeError exception.
                        Object	
                        Apply the following steps:

                        Let primValue be ? ToPrimitive(argument, hint String).
                    Return ? ToString(primValue).
            12.8.3The Addition Operator ( + )
                NOTE
                The addition operator either performs string concatenation or numeric addition.

                12.8.3.1Runtime Semantics: Evaluation
                        AdditiveExpression:AdditiveExpression+MultiplicativeExpression
                        Let lref be the result of evaluating AdditiveExpression.
                        Let lval be ? GetValue(lref).
                        Let rref be the result of evaluating MultiplicativeExpression.
                        Let rval be ? GetValue(rref).
                        Let lprim be ? ToPrimitive(lval).
                        Let rprim be ? ToPrimitive(rval).
                        If Type(lprim) is String or Type(rprim) is String, then
                        Let lstr be ? ToString(lprim).
                        Let rstr be ? ToString(rprim).
                        Return the string-concatenation of lstr and rstr.
                        Let lnum be ? ToNumber(lprim).
                        Let rnum be ? ToNumber(rprim).
                        Return the result of applying the addition operation to lnum and rnum. See the Note below 12.8.5.
                Note in a nutshell if we encounter any of the argument as a string after the ToPrimitive operation and the operator 
                is + then we convery both the operents to the number and then we return the concatenation of the but if the ToPrimitive
                returns both as a number then we apply the standard plus operation
                
                The following is the application if the method that we have mentioned above 
            12.8.4The Subtraction Operator ( - )
                    12.8.4.1Runtime Semantics: Evaluation
                    AdditiveExpression:AdditiveExpression-MultiplicativeExpression
                    Let lref be the result of evaluating AdditiveExpression.
                    Let lval be ? GetValue(lref).
                    Let rref be the result of evaluating MultiplicativeExpression.
                    Let rval be ? GetValue(rref).
                    Let lnum be ? ToNumber(lval).
                    Let rnum be ? ToNumber(rval).
                    Return the result of applying the subtraction operation to lnum and rnum. See the note below 12.8.5.
                Note in subtraction we convert if any of the operends is a number then it converts both of them to a number 
                and then apply the substraction operation asusual Refer the below table to have an idea of how to convert a the argument 
                to a number


            ToNumber ( argument )
                The abstract operation ToNumber converts argument to a value of type Number according to Table 10:

                Table 10: ToNumber Conversions
                    Argument Type	Result
                    Undefined	Return NaN.
                    Null	Return +0.
                    Boolean	If argument is true, return 1. If argument is false, return +0.
                    Number	Return argument (no conversion).
                    String	See grammar and conversion algorithm below.
                    Symbol	Throw a TypeError exception.
                    Object	
                    Apply the following steps:

                    Let primValue be ? ToPrimitive(argument, hint Number).
                    Return ? ToNumber(primValue).



*/              





console.log("74"+7); // Since "74" is a string both gets converted to string and the op is "747"
console.log("71"+NaN); // since 71 is a string both are converted to string and then concatenated op "71NaN"
console.log(""-7); //op -7 an empty string gets converted to 0 and -7 as its is and the ans is -7
console.log(true-10); //op -9 true -->1 and -10 -->-10 total output is -9
console.log([NaN]-70);  //[NaN] is been conveted to NaN and then NaN-70 will result in NaN;
//Notice very important thing

console.log(10+true); //op is 11 -->10+1=11
console.log(10-"true");  //Op is NaN since we can not convert the string "true"/"false" directly to a number
//true-->undefined-->NaN




/*
    If there is any doubt regarding the following operation refer the documentation above for the algorithm of + and - and then
    refer the ToNumber and ToString for better understanding 

*/


/*
    Pay attension in the below operation and the series of events below the operator is - which means that both the operents will get 
    converted to ToNumber
    
        10-->10
        {a:17,valueOf(){return 7}}  -->
        Object	
                Apply the following steps:

                    Let primValue be ? ToPrimitive(argument, hint Number).
                    Return ? ToNumber(primValue).
                If hint is "string", then
                        Let methodNames be « "toString", "valueOf" ».
                        Else,
                        Let methodNames be « "valueOf", "toString" ».
                See we called ToPrimitive for the object and we passes the hint as Number for the same 
                    once the hint and the operent is been passes then we call the following operation in the below order
                        valueOf
                        toString
                    Note that the following are not the Abstract operation we can also all the following and eben override it if
                    required
                    the following operation we will called until we do not encounter an primitive



*/
console.log(10-{b:17});  //OP is NaN
console.log(10-{ a: 17, valueOf(){return "7"}});
console.log(10-{ a: 17, valueOf(){return {}}}); //NaN not returning a valid primitive hence gets converted into NaN and the eventually NaN
console.log(10-{ a: 17, valueOf(){return {}},toString(){return "7"}});  // 10-7=3 op:3
console.log({ a: 17, valueOf(){return {}}}.toString()); //op [object Object] if toString is not defined then we it returns [object,Object]
//This futher converted to Primitive will result in NaN 

/*
    Another concept befor the the representation of the above object clearly
        { a: 17, valueOf(){return {}},toString(){return "7"}}
        similar to 
        {   a: 17, 
            valueOf(): {return {}},
            toString(): {return "7"}
            toString(): {return "17"}
        
        }
    Note the valueOf and toString are basically keys and an important property is that the later value of the key will override the 
    before value of the key 

*/