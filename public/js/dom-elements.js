const createCountryElement = (country) => {
    const countryElement = document.createElement("li");
    countryElement.classList.add("card");
    countryElement.innerHTML = `
        <h2 class="text-2xl text-center">${country.name}<h2>
        <img src=${country.flag}>
        <h3>Region: ${country.region}</h3>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
    `;

    return countryElement;
}

const createListElement = (countries) => {
    const listElement = document.createElement("ul");
    countries.forEach(country => {
        listElement.appendChild(createCountryElement(country));
    });

    return listElement;
}

export const renderCountries = (countries) => {
    const rootElement = document.querySelector("#root");
    rootElement.appendChild(createListElement(countries));
    console.log(countries);
}