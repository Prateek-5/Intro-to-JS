console.log(5-"ki");//We cannot convert the following into a valid number hence it is getting converted into NaN

console.log(5-"0xfa"); //op -245 "0xfa"-->250 
/*
    here we are able to convert the following string into a number because the string here is 
    a hexa decimal number

    0x denotes that it's the stating of a hexa decimal number but if it's an invalid hexadecimal number then it will 
    return NaN

    [undefined]  ToNumber  --> converted to 0;
    where as undefined -->converted to NaN
    The following difference is because [undefined] ,[[]] are been treated as objects will discusess it soon
*/

console.log(7-[undefined]);
console.log(7-[[]]); // [[]] gets converted to 0;
console.log("7"+7); //Since the first is a string and for second we will call ToPrimitive with a hint as string 

a={name:"Prateek",age:17};
console.log(a.toString()); //It returns a string [object,Object]
console.log(a.valueOf()); //It returns the same object

b=[4,5,6];
console.log(b.toString()); //return 4,5,6 without brackets
console.log(b.valueOf()); // it will returnt he same object

