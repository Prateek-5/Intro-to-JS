var arr=[1,2,3,4,5];

var x=arr.map(function(v,i){
    console.log("Index: "+i+" Value: "+v);
    return v*v;
})

console.log(arr);
console.log(x);

/*
    The map function accepts an callback function which receives the value and index as an argument and is been called 
    over each and every value of the array and returns the value after applying some logic it returns a new array as shown above
    the original array is not altered and the result is been stored in a new array 
    

*/