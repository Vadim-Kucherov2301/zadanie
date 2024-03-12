function calculate(operation) {
    const num1 = parseFloat(document.querySelectorAll(".input-field")[0].value);
    const num2 = parseFloat(document.querySelectorAll(".input-field")[1].value);
    let result;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    }
    document.getElementById("result").innerText = "Результат: " + result;
}

function calculateResult() {
    alert("Результат: " + document.getElementById("result").innerText.split(": ")[1]);
}
