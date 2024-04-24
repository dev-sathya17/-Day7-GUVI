const API_URL = "https://restcountries.com/v3.1/all";
const request = new XMLHttpRequest();
function listener() {
  let responseData = JSON.parse(this.responseText);
  console.log(responseData);
  responseData.forEach((country) => {
    if ("capital" in country) {
      console.log(
        `Country Name: ${country.name.common} Capital: ${country.capital[0]} Flag URL: ${country.flags.png}`
      );
    } else {
      console.log(
        `Country Name: ${country.name.common} Capital: 'No capital given' Flag URL: ${country.flags.png}`
      );
    }
  });
}
request.addEventListener("load", listener);
request.open("GET", API_URL);
request.send();
