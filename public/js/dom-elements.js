const createCountryElement = (country) => {
    const countryElement = document.createElement("li");
    countryElement.innerHTML = country.name;

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