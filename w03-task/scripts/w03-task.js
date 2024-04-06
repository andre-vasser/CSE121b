/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
    return number1 + number2;
}
function addNumbers (){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    let Sum = add(addNumber1,addNumber2);
    const sumElement = document.getElementById("sum");
    sumElement.value =`${Sum}`;
}
document.querySelector (`#addNumbers`).addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function sub(number1,number2){
    return number1 - number2;
}
function subNumbers (){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    let Sub = sub(subtractNumber1,subtractNumber2);
    const subtractElement = document.getElementById("difference");
    subtractElement.value =`${Sub}`;
}
document.querySelector (`#subtractNumbers`).addEventListener('click', subNumbers);

/* Arrow Function - Multiply Numbers */
function mult(number1,number2){
    return number1 * number2;
}
function multNumbers (){
    let multNumber1 = Number(document.querySelector("#factor1").value);
    let multNumber2 = Number(document.querySelector("#factor2").value);
    let Mult = mult(multNumber1,multNumber2);
    const multElement = document.getElementById("product");
    multElement.value =`${Mult}`;
}
document.querySelector (`#multiplyNumbers`).addEventListener('click', multNumbers);


/* Open Function Use - Divide Numbers */
function div(number1,number2){
    return number1 / number2;
}
function divNumbers (){
    let divNumber1 = Number(document.querySelector("#dividend").value);
    let divNumber2 = Number(document.querySelector("#divisor").value);
    let Div = div(divNumber1,divNumber2);
    const divElement = document.getElementById("quotient");
    divElement.value =`${Div}`;
}
document.querySelector (`#divideNumbers`).addEventListener('click', divNumbers);


/* Decision Structure */
function calculateTotal() {
    let subTotal = Number(document.querySelector("#subtotal").value);
    const isMember = document.querySelector("#member").checked;
    const discount = isMember ? 0.2 : 0;
    const total = subTotal * (1 - discount);
    const totalElement = document.getElementById("total");
    totalElement.textContent = `$${total.toFixed(2)}`;
}
document.querySelector("#getTotal").addEventListener('click', calculateTotal);
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = Array.from({ length: 13 }, (_, i) => i + 1);
/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById("odds").textContent = oddNumbers.join(", ");
/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evenNumbers.join(", ");
/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;
/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedArray.join(", ");
/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;