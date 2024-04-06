/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Andre Vasser';
let currentyear = '2024';
let profilePicture = "../images/Andre.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
const imageElement = document.getElementById("profilePicture");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentyear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let foodarray=["Beans","Potato","Farofa","Beef"];
foodElement.innerHTML = `<br>${foodarray}<br>`;
foodarray.push ("Chocolate","Tomato");
foodElement.innerHTML +=`<br>${foodarray}<br>`;
foodarray.shift();
foodElement.innerHTML +=`<br>${foodarray}<br>`;
foodarray.pop();
foodElement.innerHTML +=`<br>${foodarray}<br>`;





