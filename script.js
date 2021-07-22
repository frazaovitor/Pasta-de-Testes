


document.querySelector('#converter').addEventListener('click', function () {
    celcius = document.querySelector('#celcius').value
    fahrenheit = (celcius * 9 / 5) + 32
    resultado = celcius + "°C" + " = " + fahrenheit + "°F"
    document.querySelector("#resultado").innerHTML = resultado;
})

document.querySelector('#celcius').addEventListener('keydown', function (tecla) {
    if (tecla.key === "Enter") {
        celcius = document.querySelector('#celcius').value
        fahrenheit = (celcius * 9 / 5) + 32
        resultado = celcius + "°C" + " = " + fahrenheit + "°F"
        document.querySelector("#resultado").innerHTML = resultado;
    } else { return false }
})
