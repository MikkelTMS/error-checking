
//errorchecking with logic operator

myFunction()

function myFunction(myData){

    console.log(myData);


}


//errorchecking with logic operator and data type
myArrayFunction()

function myArrayFunction(mydata){

    mydata.forEach(element => {
       console.log(element); 
    });
}



// error checking in fetch
// http response codes see here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses
function getData(myUrl){

    fetch(myUrl)
    .then((response)=>{
        console.log(response);
        return response.json();
    })
   .then((data)=>{
        console.log(data)
})
.catch((error)=>{
    console.log('my error: '+error);
})
}

getData('https://dummyjson.com/http/429')


