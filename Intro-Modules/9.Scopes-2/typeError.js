var fun=10;

function greet(){
    console.log("Hello");
}

greet();
fun();  //op:TypeError

/*
    In the following case as fun is been declared as a variable we will not be getting an referecen error like the other 
    cases ut we will be getting  a type error because what we are trying to achieve here is 10() which is not possible
    the number 10 can not be executed unlike the function greet() hence we will get a type error
     


*/
