import { renderCountries } from "./dom-elements.js";

const apiUrl = "https://restcountries.com/v3.1/all";
let countries;

fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
        countries = res.map((country) => {
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