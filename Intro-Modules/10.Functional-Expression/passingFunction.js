function fun(){
    console.log("inside fun");
}

function gun(fn){
    console.log("we are inside gun");
    fn();
    console.log("we are exiting gun");
    //console.trace()//console.trace gives you the function pointer from where the function is been called 
}

gun(function(){
    console.trace(); 
    /*Notice below because of the anonomous function the function name is not comming inside the funtion trace 
        which makes it hard to debug.
        
    */
    console.log("Inside the Anon function");});

//gun(fun);
/*
Trace
    at /home/prateek/Documents/Sanket Backend/Intro-to-JS/Intro-Modules/10.Functional-Expression/passingFunction.js:13:13
    at gun (/home/prateek/Documents/Sanket Backend/Intro-to-JS/Intro-Modules/10.Functional-Expression/passingFunction.js:7:5)
    at Object.<anonymous> (/home/prateek/Documents/Sanket Backend/Intro-to-JS/Intro-Modules/10.Functional-Expression/passingFunction.js:12:1)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

*/