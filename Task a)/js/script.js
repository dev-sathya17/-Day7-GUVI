const API_URL = "https://restcountries.com/v3.1/all";
const request = new XMLHttpRequest();
function listener() {
  let responseData = JSON.parse(this.responseText);
  const asianCountries = responseData.filter((country) => {
    return country.continents[0] === "Asia";
  });

  console.log(asianCountries);
}
request.addEventListener("load", listener);
request.open("GET", API_URL);
request.send();
