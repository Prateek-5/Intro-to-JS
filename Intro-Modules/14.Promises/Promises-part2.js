/*
    Promises contain 3 things
        value
        status
        onfullfillment



*/

/*
function fetch(movie){
    return new Promise(function process(resolve,reject){
        setTimeout(function (){
            console.log("Downloading...");
            resolve("the resolved value");
        },10000)
    })
}

let x=fetch("Iron man");
console.log(x);
*/
function fetch(number){
    return new Promise(function process(resolve,reject){
        console.log("Data processing in progress");
        setTimeout(function (){
            if(number%2==0){
                resolve("the number is even");
            }
            else{
                reject("the number is odd");
            }
        },10000)
    })
}

let x=fetch(45);
x.then(function(value){
    console.log("The even/odd status of the number is ");
    console.log(value);
}).catch(function(error){
    console.log(error);
})
/*
    The problem of  inversion of control is been resolved with the following method as in the above case
    the call back is not been passed to the calling side its present in from where we are calling 


*/