/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples)=> {
    temples.forEach(temple =>{
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let imageElement = document.createElement('img');
        imageElement.setAttribute("src",temple.imageUrl);
        imageElement.setAttribute("alt",temple.location);
        article.appendChild(h3);
        article.appendChild(imageElement);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (response.ok){
            const data = await response.json();
            templeList = data;
            displayTemples(templeList);
        }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}
/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    const filter = document.getElementById('filtered').value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
    }
}



const sortTemples = (temples) => {
    reset();

    const sorted = document.getElementById('sorted').value;

    switch (sorted) {
        
        case "ascending":
            displayTemples(temples.sort());
            break;
        case "descending":
            displayTemples(temples.reverse());
            break;
        default:
            displayTemples(temples);
    }
}
getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
document.getElementById("sorted").addEventListener("change", () => { sortTemples(templeList)});