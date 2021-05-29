
fetch('https://restcountries.eu/rest/v2/all')
.then(res=>res.json())
.then(data=>countriesData(data))

const countriesData=countries=>{
    const infoConatiner=document.getElementById('infoContainer');

    countries.forEach(country => {
        const div=document.createElement('div');
        div.className='country';
        const info=`
             <h2 class='country-name'>${country.name}</h2>
              <p>${country.capital}</p>
              <button onclick="moreDetailsInfo('${country.name}')">Click For More Info</button>
        `;

        div.innerHTML=info;
        infoConatiner.appendChild(div);

    });
    // for(let i=0; i<countries.length; i++){
    //     const country=countries[i];

    //     const div=document.createElement('div');
    //     const h3=document.createElement('h3');
    //     const p=document.createElement('p');

    //     h3.innerText=country.name;
    //     p.innerText=country.capital;

    //     div.appendChild(h3);
    //     div.appendChild(p);

    //     infoConatiner.appendChild(div);
    // }
}

const moreDetailsInfo= countryInfo =>{
    const url=`https://restcountries.eu/rest/v2/name/${countryInfo}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data[0]))
}

const displayData=data=>{
    const display=document.getElementById('moreInfo');
    display.innerHTML=`
    <h1>${data.name}</h1>
    <h3>Area :  ${data.area}</h3>
    <h3>Population : ${data.population}</h3>
    <img src="${data.flag}">
    `
}