/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived = [];
/* DOM Manipulation - Output */

/* Name */
myProfile.name = "Andre Vasser";
/* Photo with attributes */
myProfile.photo = "../images/Andre.png";

/* Favorite Foods List*/
myProfile.favoriteFoods = ["Potato", "Chocolate", "Salad"];

/* Hobbies List */
myProfile.hobbies = ["Soccer", "Swim", "Bicycle"];

/* Places Lived DataList */

myProfile.placesLived.push({ place: "Brazil", length: "30Years " });
myProfile.placesLived.push({ place: "Bolivia", length: "6 Months" });
myProfile.placesLived.push({ place: "USA", length: "5 Years" });

document.querySelector('#name').textContent = myProfile.name;
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});
myProfile.placesLived.forEach(home => {
    let dt = document.createElement('dt');
    dt.textContent = home.place;
    document.querySelector('#places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent = home.length;
    document.querySelector('#places-lived').appendChild(dd);
})