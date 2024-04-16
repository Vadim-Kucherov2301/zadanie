<<<<<<< HEAD


let a = prompt("Введите число A");
let b = prompt("Введите число B");

a = parseFloat(a);
b = parseFloat(b);

function sum(a, b) {
    return a + b;
}

let res = sum(a, b);
console.log(res);
=======
function calculate(operation) {
    const num1 = parseFloat(document.querySelectorAll(".input-field")[0].value);
    const num2 = parseFloat(document.querySelectorAll(".input-field")[1].value);
    let result;
    if (operation === '+') 
       { result = num1 + num2; } 
        else if (operation === '-') 
        { result = num1 - num2;}
        else if (operation === '*') 
        { result = num1 * num2; }
        else if (operation === '/') 
        { result = num1 / num2; }
        
    document.getElementById("result").innerText = "Результат: " + result;
}

function calculateResult() {
    alert("Результат: " + document.getElementById("result").innerText.split(": ")[1]);
}
>>>>>>> a607bf8302a62805969a2090355d06afe4fb13a7
