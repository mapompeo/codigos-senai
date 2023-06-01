function calculo() {
    let celsius = Number(document.getElementById('celsius').value)
    console.log(celsius + "°C")
    let fahrenheit = Number(document.getElementById('fahrenheit').value)
    console.log(fahrenheit + "°F")
    let total_celsius = 0
    let total_fahrenheit = 0

    total_celsius = (fahrenheit - 32) * 5/9 
    total_fahrenheit = (celsius * 9/5) + 32

    console.log(total_fahrenheit + "°F")
    console.log(total_celsius + "°C")

    res_celsius.innerHTML = 'O valor de Fahrenheit para Celsius é de ' + total_celsius.toFixed(2) + '°C'
    res_fahrenheit.innerHTML = 'O valor de Celsius para Fahrenheit é de ' + total_fahrenheit.toFixed(2) + '°F'
}