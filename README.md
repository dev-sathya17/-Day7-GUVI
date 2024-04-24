# Day7-GUVI

### Task a:

> **Get all the countries from Asia continent /region using Filter method from https://restcountries.com/v3.1/all.**  
> [Source Code Directory](<./Task%20a)/>)  
> Explanation:
>
> First, we create an _index.html_ file to which we add our _script.js_ and _style.css_ files using _script_ and _link_ tags respectively.
> Now, in our JavaScript code, first we declare the api url as a **const** variable.
> Let's get into the Code flow:
>
> - An object is created for the _XMLHttpRequest_ class to make an API request.
> - An event listener is made for the page using the addEventListener method for the XMLHttpRequest object to fetch the response on page load.
> - Using the _open()_ method of the _XMLHttpRequest_ object we send a **GET** request to the API URL.
> - The request is sent by using the _send()_ method of the _XMLHttpRequest_ object.
> - Inside the listener, the _responseData_ is filtered using the array method **filter** where the country object is passed as a parameter to the arrow function.
> - The function compares the continent value of the country with the string _"Asia"_ using the _strict equality operator_ (===).
> - The _filter_ method returns the country objects that have the continent value of Asia to a resultant array named as _asianCountries_.
> - This resultant array is printed to the console using the _console.log_ function.

---

### Task b:

> **Get all the countries with a population of less than 2 lakhs using Filter method from https://restcountries.com/v3.1/all**  
> [Source Code Directory](<./Task%20b)/>)  
> Explanation:
>
> First, we create an _index.html_ file to which we add our _script.js_ and _style.css_ files using _script_ and _link_ tags respectively.
> Now, in our JavaScript code, first we declare the api url as a **const** variable.
> Let's get into the Code flow:
>
> - An object is created for the _XMLHttpRequest_ class to make an API request.
> - An event listener is made for the page using the addEventListener method for the XMLHttpRequest object to fetch the response on page load.
> - Using the _open()_ method of the _XMLHttpRequest_ object we send a **GET** request to the API URL.
> - The request is sent by using the _send()_ method of the _XMLHttpRequest_ object.
> - Inside the listener, the _responseData_ is filtered using the array method **filter** where the country object is passed as a parameter to the arrow function.
> - The function compares the continent value of the population a number 200000 using the _lesser than operator_ (<).
> - The _filter_ method returns the country objects that have a population value less than 2 lakh to a resultant array named as _countries_.
> - This resultant array is printed to the console using the _console.log_ function.

---

### Task c:

> **Print the following details name, capital, flag, using forEach method from https://restcountries.com/v3.1/all**  
> [Source Code Directory](<./Task%20c)/>)  
> Explanation:
>
> First, we create an _index.html_ file to which we add our _script.js_ and _style.css_ files using _script_ and _link_ tags respectively.
> Now, in our JavaScript code, first we declare the api url as a **const** variable.
> Let's get into the Code flow:
>
> - An object is created for the _XMLHttpRequest_ class to make an API request.
> - An event listener is made for the page using the addEventListener method for the XMLHttpRequest object to fetch the response on page load.
> - Using the _open()_ method of the _XMLHttpRequest_ object we send a **GET** request to the API URL.
> - The request is sent by using the _send()_ method of the _XMLHttpRequest_ object.
> - Inside the listener, the _responseData_ is iterated using the array method **forEach** where the country object is passed as a parameter to the arrow function.
> - The function checks whether there is a capital property in the JSON data as it is missing in some of the country objects.
> - If there is a capital property, a string is printed to the console screen in the format of `Country Name: ${country.name.common} Capital: ${country.capital[0]} Flag URL: ${country.flags.png}`.
> - If there is no capital property, a string is printed to the console screen in the format of `Country Name: ${country.name.common} Capital: 'No capital given' Flag URL: ${country.flags.png}`

---

### Task d:

> **Print the total population of countries using reduce method from https://restcountries.com/v3.1/all**  
> [Source Code Directory](<./Task%20d)/>)  
> Explanation:
>
> First, we create an _index.html_ file to which we add our _script.js_ and _style.css_ files using _script_ and _link_ tags respectively.
> Now, in our JavaScript code, first we declare the api url as a **const** variable.
> Let's get into the Code flow:
>
> - An object is created for the _XMLHttpRequest_ class to make an API request.
> - An event listener is made for the page using the addEventListener method for the XMLHttpRequest object to fetch the response on page load.
> - Using the _open()_ method of the _XMLHttpRequest_ object we send a **GET** request to the API URL.
> - The request is sent by using the _send()_ method of the _XMLHttpRequest_ object.
> - Inside the listener, the _responseData_ is filtered using the array method **reduce** where an _accumulator_ and the country object is passed as a parameter to the arrow function.
> - An addition parameter of **0** is passed to the reduce method to initialize the value of the accumulator to 0.
> - The function adds the population to the accumulator value and returns the accumulator to a const variable _populationOfTheWorld_.
> - This resultant value is printed to the console using the _console.log_ function.

---

### Task e:

> **Print the country that uses US dollars as currency from https://restcountries.com/v3.1/all**  
> [Source Code Directory](<./Task%20e)/>)  
> Explanation:
>
> First, we create an _index.html_ file to which we add our _script.js_ and _style.css_ files using _script_ and _link_ tags respectively.
> Now, in our JavaScript code, first we declare the api url as a **const** variable.
> Let's get into the Code flow:
>
> - An object is created for the _XMLHttpRequest_ class to make an API request.
> - An event listener is made for the page using the addEventListener method for the XMLHttpRequest object to fetch the response on page load.
> - Using the _open()_ method of the _XMLHttpRequest_ object we send a **GET** request to the API URL.
> - The request is sent by using the _send()_ method of the _XMLHttpRequest_ object.
> - Inside the listener, the _responseData_ is filtered using the array method **filter** where the country object is passed as a parameter to the arrow function.
> - The function checks whether there is a currencies property in the JSON data as it is missing in some of the country objects.
> - We retrieve the currency value from the country object by using the Object.keys() to get the value.
> - The function compares the currency value of the country object to a string "USD" using the _strict equality operator_ (===).
> - The _filter_ method returns the country objects that have a currency of USD named as _USCountries_.
> - This resultant array is printed to the console using the _console.log_ function.

---
