var teacher="Sanket";
function greet(){
    teacher="Pulkit";
    console.log(teacher);
}
greet()
console.log(teacher);
/*
    This is the code in which we are assigning the global scoped variable a value inside the function
    because the variable teacher was not declared int the function scope it refers to the globalScope and 
    change it and then the changed value persisted

*/