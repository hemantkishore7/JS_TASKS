var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
  let result = JSON.parse(request.response);
  console.log(result);
  for (var i = 0; i <= result.length; i++) {

    //Print all country flags
    console.log("Flag of"+ result[i].name.common+ ": " +result[i].flag);

    //Print all countries name, regions, sub-regions & populations
    console.log(
      result[i].name.common +
        "-" +
        result[i].region +
        "-" +
        result[i].subregion +
        "-" +
        result[i].population
    );
  }
};

let obj1 = { 
    name : "person1",
    age : 5
    }
    let obj2 = {
    age : 5,
    name : "person1"
    }
    
    console.log(JSON.stringify(obj1)===JSON.stringify(obj2));