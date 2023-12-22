greet();
function greet(){
    console.log("rooot");
}
/*
    The following is the phenomina of hoisting its same in the phase 1 the scope manager is aware that there is a function named 
    greet in the globale scope so when in phase 2 we try to execute the following function the we will not get any error since a formal
    declaration of the following function is present then then when we call foe execution it excuted properly 

    The formal defination of moving the decaration to the top of the scope is just for easy understand .
    But hoisting is a  direct concequence of lexical parcing due to which  we are able to access some functiona nd variable before 
    declaring it which gives us a notion that they are declare are moved up


*/

/*
    Block scoping means when ever we have declared  a code it will be available only below it and not above it 
    See the below example for better understand the code will give reference error
*/

{
    console.log(x);
    let x=78;
}