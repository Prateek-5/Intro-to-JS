
let id1=setInterval(function(){
    console.log("repeated again");
},3000);
console.log(typeof id1);
setTimeout(function(){
    clearInterval(id1);
},13000);

/*
    Exactly repeated 4 times
        repeated again
        repeated again
        repeated again  
        repeated again

    In the follwing code we becase familiar with the sytax of the setInterval function and similar to the setTimeout function it returns the
    a unique id which can be used to call the clearInterval function as we did in the setTimeout function above



*/