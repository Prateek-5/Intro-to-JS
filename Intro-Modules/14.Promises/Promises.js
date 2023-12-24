/*
    Disadvantages of callbacks
        Callback Hell :-Callback inside a callback inside a callback
        Inversion control :-If there are some part of code whose control we are passing to someone else and we dont know how that part will 
        execute .This process is called inversion of control

        Example come is shown below


*/

function process(inputString,fn){
    let result=inputString.split(",");
    
    for(let i=0;i<result.length;i++){
        fn(result[i]);
        fn(result[i]);
    }
    

}

process("name:prateek,subject:cse1",function fn(result){
    var result2=result.split(":");
    console.log(result2[0]+"=>"+result2[1]);
});

/*
    In the following piece of code the control of the callback function is dependent on another function 
    Which alines to the above statement that we are not aware how the above part of the code will be executed
    like we can call the callback twice for the string this is called inversion of control


*/

/*
    Promises
    Promises are special JS object considered as readiability enhancers They get immediatly returned from a 
    function to return promises.They act as placeholders for the data we hope to get back from future task
    We also attach the funcationality we want to defer until the future task is done and promis object automatically
    handel the executin of this task

*/
// Tasks:
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function fetchCustom(url, fn) { // we are mimicing the function
    // download content of the url
    // this downloading can take sometime, 
    // we will download the content from url, and then whatver is the result, we will pass to the callback
    console.log("Starting downlaoding from", url);
    setTimeout(function process() {
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
    }, 3000);
}

function writeFile(data, fn) {
    // this function writes data in a new file
    console.log("Started writing data", data);
    setTimeout(function process() {
        console.log("Writing completed");
        let filename = "output.text";
        fn(filename);
    }, 4000);
}

function uploadFile(filename, newurl, fn) {
    console.log("Upload started");
    setTimeout(function process() {
        console.log("File", filename,  "uploaded successfully on", newurl);
        let uploadResponse = "SUCCESS";
        fn(uploadResponse);
    }, 2000);
}


fetchCustom("www.google.com", function downloadCallback(response) {
    console.log("Downloaded response is", response);
    writeFile(response, function writeCallback(filenameResponse) {
        console.log("new file written is", filenameResponse);
        uploadFile(filenameResponse, "www.drive.google.com", function uploadCallback(uploadResponse) {
            console.log("Successfully uploaded", uploadResponse);
        });
    });
});

/*
    Following is a representation of callback hell


*/