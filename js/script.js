const loadApiData = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => loadCountries(data))

}
const loadCountries = (countries) => {
    let countrisHTML = countries.map(country => singleCountry(country));
    document.getElementById('all-countries').innerHTML = countrisHTML.join(' ');

}
const singleCountry = country => {
    console.log(country);
    const { name, flags } = country;
    let data = `
    <div class="country">
        <h3>${name}</h3>
        <img src="${flags.png}">
    </div>
    `;
    return data;

}

loadApiData();