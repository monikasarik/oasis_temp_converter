function convertTemperature(){
    const inputTemperature = parseFloat(document.getElementById("num").value);
    const unit = document.getElementById("unit").value;

    let convertedTemperature;

    if (unit === 'Celsius'){
        convertedTemperature = (inputTemperature * 9/5) + 32;
        document.getElementById("result").textContent = `${inputTemperature} degrees Celsius = ${convertedTemperature} degrees Fahrenheit.`;
    }
    else if (unit === 'Fahrenheit'){
        convertedTemperature = (inputTemperature - 32) * 5/9;
        document.getElementById("result").textContent = `${inputTemperature} degrees Fahrenheit = ${convertedTemperature} degrees Celsius.`;
    }
    else {
        document.getElementById("result").textContent = 'Select a valid unit.';
    }
}
