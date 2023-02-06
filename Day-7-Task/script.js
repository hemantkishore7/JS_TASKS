let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.responseType = "json";

request.onload = function(){
    let result = JSON.parse(request.response)
    for (var i = 0; i <= result.length; i++) {  
        console.log(result[i]);
    }
}