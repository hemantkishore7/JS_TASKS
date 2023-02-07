  
  class RestCountries{
    constructor(countries = [], population = [],currencies = [], name =[], capital =[], flag =''){
        this.population=population;
        this.currencies = currencies;
        this.countries = countries;
        this.name = name;
        this.capital = capital;
        this.flag =flag;
        }
    getCountries(arrCountry = []){
        console.log("Asian Region Country:");
        this.countries = arrCountry.filter(country => country.region == 'Asia'); 
        return this.countries;
    }
    getPopulation(arrCountry = []){
        console.log("Population less than 2 lakhs:");
        this.population = arrCountry.filter(pop => pop.population < 200000);
        return this.population;
    }
    getCurrency(arrCountry = []){
        console.log("Dollar Currency used Countries: ")
        this.currencies = arrCountry.filter(cur => cur.currencies == "United States dollar")
        return this.currencies;
    }
    getNameCapitalFlag(arrCountry = []){
       
       return arrCountry.name
    }
    getTotalPopulation(arrCountry = []){
        //let getPop = arrCountry.population
      let tot = arrCountry.reduce((t,p) => t + p.population)
      return tot;
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
    console.log(setDetail.getCurrency(arrCountry));
    //arrCountry.forEach(setDetail.getNameCapitalFlag(getdetail))
    console.log(setDetail.getTotalPopulation(arrCountry))
}

