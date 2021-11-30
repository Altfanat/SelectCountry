const countries = {
  Russia: ["Moscow", "Saratov", "Volgograd"],
  Spain: ["Madrid","Barcelona", "Valencia"],
  Italy: ["Roma", "Milano", "Verona"]
}

const $countries = document.querySelector("[data-countries]");
const $cities = document.querySelector("[data-cities]");
const $selectedTravel = document.querySelector("[data-selectedTravel]");

const arrCountries = Object.keys(countries);
for (let i = 0; i < arrCountries.length; i++){
  let newOption = new Option(arrCountries[i], arrCountries[i]);
  $countries.appendChild(newOption)
}


function insertCities () {
 let selectedCountry = $countries.value;
 let selectedCities = countries[selectedCountry];
 $cities.innerHTML = "";
 for (let i = 0; i < selectedCities.length; i++){
  let newOption = new Option(selectedCities[i], selectedCities[i]);
  $cities.appendChild(newOption)
 }
 selectedTravel()
}
insertCities()

function selectedTravel () {
let countryValue = $countries.value;
let cityValue = $cities.value;
$selectedTravel.innerText = `${countryValue}, ${cityValue}`
}


$countries.addEventListener('change', insertCities);
$cities.addEventListener('change', selectedTravel);


