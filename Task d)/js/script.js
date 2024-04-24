const API_URL = "https://restcountries.com/v3.1/all";
const request = new XMLHttpRequest();
function listener() {
  let responseData = JSON.parse(this.responseText);
  const populationOfTheWorld = responseData.reduce((accumulator, country) => {
    accumulator += country.population;
    return accumulator;
  }, 0);

  console.log(`The population of the world is: ${populationOfTheWorld}`);
}
request.addEventListener("load", listener);
request.open("GET", API_URL);
request.send();
