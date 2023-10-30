function convertirTemperatura() {
    let celsius;
    let verificarTemperatura = false;
  
    while (!verificarTemperatura) {
      let input = prompt("Ingresa la temperatura en grados Celsius:");
      celsius = parseFloat(input);
  
      if (!isNaN(celsius)) {
        verificarTemperatura = true;
      } else {
        alert("Por favor, ingresa un valor numérico válido.");
      }
    }
  
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
  
    console.log("Grados Kelvin: " + kelvin.toFixed(2));
    console.log("Grados Fahrenheit: " + fahrenheit.toFixed(2));
  }
  
  convertirTemperatura();
  