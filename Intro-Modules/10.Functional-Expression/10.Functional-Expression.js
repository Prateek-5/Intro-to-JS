function greet(){
    console.log("hi");
}

var gun=function(){
    console.log("hello");
}

(function buy(){ console.log("buy");})

/*
    The 2nd and the 3rd are functional expressions
    Function defination vs Functional expressions
    function <name>(args){
        //Implementation        -->No Evaluation
    }
    var f=function (args){
        //implementation        -->Some kind of evaluation as we ate creating a function and assigning it to a variable
    }
    (function (){})

    Generally if the first word of the function is not the function itself then it is a function expression

*/

/*
    In JS we can pass functions as in argument to another function.
    Function expressiona re of 2 types
        Anonymous  ->Hard to debug ,readiability of the code is affacted,and it time writing recursion is difficult
        Named  

*/


/*
    Scope of Functional Expressions
    In the below functional expression the scope of the run function assigned to x is not gloable it's inside the run variable
    In a nutshell the function run is inside the scope of x and not global if we try to access the run function directly we would get 
    reference error


*/

function meet(){
    console.log("You are inside meet");
}
var x=function run(){
    console.log("Inside the run");
}

//run(); //ReferenceError: run is not defined
x(); //op:Inside the run
/* */