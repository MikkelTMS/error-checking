// http response codes see here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses

// #section
function getData(myUrl){

    fetch(myUrl)
    .then((response)=>{
        console.log(response);
        return response.json();
    })
   .then((data)=>{
        console.log(data)

})
}



getData('https://dummyjson.com/http/429')