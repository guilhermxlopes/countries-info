const countriesContainer = document.querySelector(".countries");

//////////////////////////////////

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/name/brazil");
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
});
