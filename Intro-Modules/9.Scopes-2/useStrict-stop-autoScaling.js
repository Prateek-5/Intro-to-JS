//"use strict";//in Strict Mode auto globals are probhited

function greet(){
    
    location="india";
    console.log(location);
}
//greet();

/*
    There is a notion reagarding autoGlobal in JS some people favour it some don't so if we are in a situtation where we have to
    stop the autoGlobal of variable from out code there we can use "use strict" in double quotes at the start of the code to stop it
*/

/*
    Strict mode can not only be used at the start of the file it can also be used inside a particular function

*/

function gun(){
    "use strict"
    currlocation="lucknow";
    console.log(currlocation);
}
//gun();

function fun(){
    
    currlocation2="Up";
    console.log(currlocation2);
}
fun();

/*The funfunction works fine just the gun variable give error during the autoGlobal phenomina */