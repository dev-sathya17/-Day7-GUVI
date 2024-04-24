const API_URL = "https://restcountries.com/v3.1/all";
const request = new XMLHttpRequest();
function listener() {
  let responseData = JSON.parse(this.responseText);
  const countries = responseData.filter((country) => {
    return country.population < 200000;
  });

  console.log(countries);
}
request.addEventListener("load", listener);
request.open("GET", API_URL);
request.send();
