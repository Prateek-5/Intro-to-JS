/**
    Closure is when the function remabmers it lexical scope even when the function is executed outside the lexical scope
    Refer the below example for a better understand and then the note analysing the function
 */

function todo(task){
    console.log("Start of TODO");
    setTimeout(function execute(){
        console.log("The task was "+task);
    },5000);
    task="Programming"
    console.log("TODO ended");
}

console.log("Program start");
todo("coding");
console.log("Program ended");

/*
    Points to note here 
        Output of the above code
            Program start
            Start of TODO -->Function started
            TODO ended     -->Function ended 
            Program ended
            The task was Programming
        See even after the ending of the function the program remembers its lexical scope and executed the execute() function
        based on the same 
        Note closure does'nt mean snapshot of the variable as we have changed the variabble also as the program is refering
        the updated so there is nothing as snapshot it's all scope of variable that we studied in scope manager
        phase 1 and phase 2
        A point to note reagrding the lexical scoping the parameter/arguments passed to the function are part of the functional scope
        WE do not do closer on value we do it on variables
        

*/