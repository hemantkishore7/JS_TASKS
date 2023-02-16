
class RestCountries {
  constructor(countries = [], population = [], currencies = [], name = [], capital = [], flag = '') {
    this.population = population;
    this.currencies = currencies;
    this.countries = countries;
    this.name = name;
    this.capital = capital;
    this.flag = flag;
  }

  getCountries(arrCountry = []) {
    console.log("#Asian Region Country:");
    let res = arrCountry.filter(country => country.region == 'Asia'   );
    let ans = res.map((country)=>{
      return country.name.common
    })
    console.log(ans)
  }

  getPopulation(arrCountry = []) {
    console.log("#Population less than 2 lakhs:");
    let population = arrCountry.filter(pop => pop.population < 200000);
    let res = population.map((country)=>{
      return country.name.common
    })
     //console.log(population);
    console.log(res);
  }

  getCurrency(arrCountry = []) {
   
    console.log("#Dollar Currency used Countries: ")
    let curr = arrCountry.filter(cur => cur.currencies.USD[0]=="United States dollar");
    console.log(curr);
    let res = curr.map(c=>c.name.common)
     console.log(res);
  }

  getNameCapitalFlag(arrCountry = []) {
    console.log("# Name   Capital    Flag");
    arrCountry.forEach((ele) => {
      console.log(ele.name.common+ " "+ ele.capital+ " " + ele.flag);
    });

  }

  getTotalPopulation(arrCountry = []) {
    //let getPop = arrCountry.population
    console.log("#Total No of Population:")
    let tot = arrCountry.reduce((t, p) => {
      if (typeof t == 'object') {
        return t.population + p.population
      }
      return t + p.population
    })
    console.log(tot);
  }

}
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = () => {
  let getdetail = JSON.parse(request.response)
  let arrCountry = [...getdetail];
  let setDetail = new RestCountries(arrCountry.countries, arrCountry.population, arrCountry.currencies)
  setDetail.getCountries(arrCountry);
  setDetail.getPopulation(arrCountry);
 
  //console.log(arrCountry)
  setDetail.getNameCapitalFlag(arrCountry);
  setDetail.getTotalPopulation(arrCountry);
  setDetail.getCurrency(arrCountry);
}

