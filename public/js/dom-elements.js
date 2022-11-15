const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione repellat nulla totam deserunt velit ad dolorum non facere, expedita quo dolore ullam, porro accusamus!"

const createCountryElement = (country) => {
    const countryElement = document.createElement("li");
    countryElement.classList.add("card");
    countryElement.innerHTML = `
        <img class="photo" src=${country.flag}>
        <h2 class="title">${country.name}</h2>
        <p class="description">${lorem}</p>
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