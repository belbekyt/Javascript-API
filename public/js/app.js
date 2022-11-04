const apiUrl = "https://restcountries.com/v3.1/all";

let countries;

fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => (countries = res.map((country) => {
        return {
            capital: country.capital,
            population: country.population,
            name: country.name.common,
            region: country.region,
            flag: country.flags.png
        };
    })));