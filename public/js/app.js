import { renderCountries } from "./dom-elements.js";

const apiUrl = "https://restcountries.com/v3.1/all";
let countries;
const inputValue = document.querySelector("#country-name");
let value = "";
const regionInput = document.querySelector("#country-region");
let regionValue = "";

inputValue.addEventListener("input", (e) => {
    value = e.target.value;
    fetching(value, regionValue);
})

regionInput.addEventListener("input", (e) => {
    regionValue = e.target.value;
    fetching(value, regionValue);
})

let fetching = (value, region) => {
    fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
        countries = res.filter(country => {
            if(region != ""){
                return country.name.common.toLowerCase().includes(value.toLowerCase()) && country.region.includes(region);
            }
            else{
                return country.name.common.toLowerCase().includes(value.toLowerCase());
            }
        })
        countries = countries.map((country) => {
            return{
                name: country.name.common,
                flag: country.flags.png,
                region: country.region,
                capital: country.capital && country.capital[0],
                population: country.population
            }
        });
        renderCountries(countries);
    });
}

fetching(value, regionValue);