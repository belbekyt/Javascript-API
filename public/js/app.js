import { renderCountries } from "./dom-elements.js";

const apiUrl = "https://restcountries.com/v3.1/all";
let countries;
const inputValue = document.querySelector("#country-name");
let value = "";

inputValue.addEventListener("input", (e) => {
    fetching(e.target.value);
})

let fetching = (value) => {
    fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
        countries = res.filter(country => {
            return country.name.common.toLowerCase().includes(value.toLowerCase());
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

fetching(value);