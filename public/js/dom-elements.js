const createCountryElement = (country) => {
    const countryElement = document.createElement("li");
    countryElement.classList.add("card");
    countryElement.innerHTML = `
        <img class="photo" src=${country.flag}>
        <h2 class="title">${country.name}</h2>
        <div class="info-box">
            <h3>Region: ${country.region}</h3>
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population}</p>
        </div>
    `;

    return countryElement;
}

const createListElement = (countries) => {
    const listElement = document.createElement("ul");
    listElement.classList.add("list");
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