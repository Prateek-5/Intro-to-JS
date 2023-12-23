
let id1=setTimeout(function(){
    console.log("Inside first timeout");
},10000);

let id2=setTimeout(function(){
    console.log("Inside second timeout");
    clearTimeout(id1);
},7000)

/*
    output:Inside second timeout

    the follwing is the working example of the setTimeout function and the followinf function return an id the following id is been 
    used by the cletTimeout function to take the id of the respective function and clear it's timer form the memory 
    That's why in the above case the statement inside the first Timeout function is not been printed as the secons timeout function has 
    cleared it after 7 secs


*/