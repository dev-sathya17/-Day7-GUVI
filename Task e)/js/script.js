const API_URL = "https://restcountries.com/v3.1/all";
const request = new XMLHttpRequest();
function listener() {
  let responseData = JSON.parse(this.responseText);
  const USCountries = responseData.filter((country) => {
    if ("currencies" in country) {
      return Object.keys(country.currencies)[0] === "USD";
    }
  });

  console.log(USCountries);
}
request.addEventListener("load", listener);
request.open("GET", API_URL);
request.send();
