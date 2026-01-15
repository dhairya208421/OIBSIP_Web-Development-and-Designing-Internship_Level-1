const input = document.getElementById("temperatureInput");
const unitSelect = document.getElementById("unitSelect");
const resultDiv = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", function () {
    const value = parseFloat(input.value);
    const unit = unitSelect.value;

    if (isNaN(value)) {
        resultDiv.textContent = "Enter a valid number.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {
        celsius = value;
        fahrenheit = (value * 9 / 5) + 32;
        kelvin = value + 273.15;
    } 
    else if (unit === "fahrenheit") {
        celsius = (value - 32) * 5 / 9;
        fahrenheit = value;
        kelvin = celsius + 273.15;
    } 
    else {
        kelvin = value;
        celsius = value - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    resultDiv.innerHTML = `
        Celsius: ${celsius.toFixed(2)} °C<br>
        Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
        Kelvin: ${kelvin.toFixed(2)} K
    `;
});
