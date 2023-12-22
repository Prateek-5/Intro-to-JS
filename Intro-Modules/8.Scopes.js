/*
    Scope is generally refered to where to look for things in JS in reference to variables and functions

    There are 3 types of scope
        1.Global Scope -->If the variable is present in a global scope then it is present anywhere in the JS file
        2.Function Scope  ->the visibility of the variable.function is inside the outter function
        3.Block Scope  --> If the variable is acceable within a block we call it a blocked scoped variable 

        Global Scope :- To defind a global variable we can define it outside the function/block


 */

/*
    1st way to define a global scope variable
    2nd way is Autoglobal discussed below

    var name="prateek";

    function greet(){
        console.log("Hi "+name);
    }
    function wish(){
        console.log("Good morning "+name);
    }

    greet();
    wish();
*/

/**
 * The following code snippet will provide the working of function scope 
    var name="prateek";

    function greet(){
        let x="Naman";
        function test(){
            console.log("the value of x inside the nested function"+x);
        }
        test();
        console.log("the value of x in the function" + x);
        console.log("Hi "+name);
    }
    function wish(){
        console.log("Good morning "+name);
    }

    greet();
    wish();


*/

/**IN JS we can initialize a block by using curly braces
 * {
 *      This is refered as  a block be it an raw block or a if,else block
 * }
 * 
 */

/*
{
    let x=45;
    console.log(x);//The following will give the output as 45 but 
}

console.log(x);//the following will not give us the required output as we do not have acccess to the variable outside the block it will give us x not defined
*/

/*
    let vs var vs const
        var:- when ever we initialize a variable as var inside a function then it will be initialized as a 
        function scope .if the var is initialized outside the function regardless of the fact if the variable is initialized in
        a block or anywhere else the variable will be a gloabl scope variable 

 */

{
    var a=10;
    console.log(a);
}
console.log(a);

if(true){
    var b=17;
}
if(false){
    var c=18;
}

console.log(b);//Notice we are abe t print the value of b without any error because of var decalred inside outside the function is global scope

console.log(c);
/*
    Notice the code inside the initialization of c is not been executed but still the fillowing line is not give error like
    we get if we try to access the function variable outside the function it is happening so because og the fact of lexical scopping
    we discuess it soon and also the fact that javascript in not a fully complied lang

*/

/*
    let when ever we declare a variable with let it takes the scoping of the enclosing block
    the let variable cannot be redeclared we will encounter error while doing so 
    If we declare let outside the block it does not get the compleate global scope

*/

//the global scope of var and let 

console.log(k+"the value of var  declared variable"); //op:undefined will be delt in lexical scoping
//console.log(l+"the value of the let declared globale variable");
var k=45;
let l=45;

/*
    const it is also blocked scoped the only difference is that it does not allow reassignment


*/

/*
const age=17;
console.log(age);
age=18;//Type error Assignment to const variable reason is mentioned above 
console.log(age);
*/

/*
    How Js parses the code 
        As JS is a hybrid lang compiled+interprated
        In the first phase it first parses the code and assigns the scope and in the second phase it 
        reads throught the code and execute it

    In the first phase the whole code is been parsed and all the scopes are been store in buckets like we have 
    a global variable a so we assign a bucket of a in global scope and similarly for function abc() in gloabl scope
    inside the function scope the variable of the functionl scope etc 
    In a nutshell the variables are been declare but not defined 

    The value assignment is been done in phase 2 the value are been assigned as we progress in the code.
    

*/

/*
    Autoglobal:

    In Js if we keep on searching the scope of a variable in the outer scope and do not find it then we 
    automatically consider it in global scope
    Another way to declare global variables 

*/

a=75
function abc(){
    var a=45;
    //console.log(location);
    location="india";  //Notice how the following variable is been assigned a global scope 
    console.log(location);
}

console.log(a);
abc(); 
console.log(location+"this is from the global scope");

/* 
    But one important point to note here is that if we do not call the following function abc() then the following 
    autoglobal process of assigning the variable to the global scope will not happen as autoglobal is a runtime process

*/

