/*
    Code of a custom map function 
    The following code attempts to mimic the working of a custom map function 

*/

function mapper(arr,fn){
    var result=[];
    for(let i=0;i<arr.length;i++){
        
        var res=fn(i,arr[i]);
        result.push(res);
    }
    return result;
}

function fn(i,v){
    return v*v*v;
}


arr=[2,4,6,8,10];

let x=mapper(arr,fn);
/*
    An important thing to keep in mind while passing the callbakc in a function is that we should not pass a callback as
    fu() as in the above case as it woulf resut in passing the return of the function as an call back and it time is the 
    return is undefined then inside the function where the callback is been called the function will end up calling undefined which
    would give uss the error
    

*/
console.log(arr);
console.log(x);
