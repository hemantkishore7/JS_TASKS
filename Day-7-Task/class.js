  
  class RestCountries{
    constructor(countries = [], population = [],currencies = [] ){
        this.population=population;
        this.currencies = currencies;
        this.countries = countries;
        }
    getCountries(arrCountry = []){
        console.log("Asia Region Country:");
        return arrCountry.filter(country => country.region == 'Asia'); 
    }
    getPopulation(arrCountry = []){
        console.log("Population less than 2 lakhs:");
        return arrCountry.filter(pop => pop.population < 200000);
    }
  }
  var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = () =>{
    let getdetail = JSON.parse(request.response)
    let arrCountry = [...getdetail];
    let setDetail = new RestCountries(arrCountry.countries,arrCountry.population,arrCountry.currencies)
    console.log(setDetail.getCountries(arrCountry));
    console.log(setDetail.getPopulation(arrCountry));
}

