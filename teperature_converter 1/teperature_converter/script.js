// =========================================
// GET HTML ELEMENTS
// =========================================

const temperatureInput =
    document.getElementById("temperature");

const unitSelect =
    document.getElementById("unit");

const convertButton =
    document.getElementById("convert-btn");

const resetButton =
    document.getElementById("reset-btn");

const errorMessage =
    document.getElementById("error-message");

const celsiusResult =
    document.getElementById("celsius-result");

const fahrenheitResult =
    document.getElementById("fahrenheit-result");

const kelvinResult =
    document.getElementById("kelvin-result");


// =========================================
// CONVERT TEMPERATURE
// =========================================

convertButton.addEventListener("click", function () {

    const inputValue =
        temperatureInput.value.trim();

    const unit =
        unitSelect.value;


    // Clear previous error

    errorMessage.textContent = "";


    // Validate empty input

    if (inputValue === "") {

        errorMessage.textContent =
            "Please enter a temperature value.";

        clearResults();

        return;
    }


    // Convert input into number

    const temperature =
        Number(inputValue);


    // Validate non-numeric value

    if (!Number.isFinite(temperature)) {

        errorMessage.textContent =
            "Please enter a valid numeric value.";

        clearResults();

        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    // =====================================
    // CELSIUS INPUT
    // =====================================

    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit =
            (temperature * 9 / 5) + 32;

        kelvin =
            temperature + 273.15;
    }


    // =====================================
    // FAHRENHEIT INPUT
    // =====================================

    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius =
            (temperature - 32) * 5 / 9;

        kelvin =
            celsius + 273.15;
    }


    // =====================================
    // KELVIN INPUT
    // =====================================

    else if (unit === "kelvin") {

        kelvin = temperature;

        celsius =
            temperature - 273.15;

        fahrenheit =
            (celsius * 9 / 5) + 32;
    }


    // =====================================
    // ABSOLUTE ZERO VALIDATION
    // =====================================

    if (kelvin < 0) {

        errorMessage.textContent =
            "Invalid temperature. Temperature cannot be below absolute zero.";

        clearResults();

        return;
    }


    // =====================================
    // DISPLAY RESULTS
    // =====================================

    celsiusResult.textContent =
        formatTemperature(celsius);

    fahrenheitResult.textContent =
        formatTemperature(fahrenheit);

    kelvinResult.textContent =
        formatTemperature(kelvin);

});


// =========================================
// RESET BUTTON
// =========================================

resetButton.addEventListener("click", function () {

    temperatureInput.value = "";

    unitSelect.value = "celsius";

    errorMessage.textContent = "";

    clearResults();

});


// =========================================
// CLEAR RESULTS
// =========================================

function clearResults() {

    celsiusResult.textContent = "—";

    fahrenheitResult.textContent = "—";

    kelvinResult.textContent = "—";
}


// =========================================
// FORMAT RESULTS
// =========================================

function formatTemperature(value) {

    return Number(value.toFixed(2));

}