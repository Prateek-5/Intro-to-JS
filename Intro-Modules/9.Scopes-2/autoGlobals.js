var subject="computer science";
function temp(){
    console.log(subject);
    console.log(location);//the following line will give the error as undefined because the autoGlobal is a process at runtime
    /*
        Since we have not formally declared the following variable in phase 1 the scopes will not know about the following variable
        and in phase 2 when we try to access the following variable we will get a referecen error

        Same will not be the case if we interchange their position then the autoGLobal will formally declare the variable as a global
        variable and it will assign value to it and then if we access it then it will return the assigned value in console log 

    
    */
    location="India";
    
}

function greet(){
    console.log(age); // the following code will return as undefined 
    /*
        The scope will be aware of the age variable but as it is formally declare and in phase 1 the bucket by the name of age will be 
        created by the scope manager but it woul dnot have any value hence it will return undefined but it woun't give any error
        Value allocation always happen in phase 2
    */
    var age=19;

}

//temp();
greet();