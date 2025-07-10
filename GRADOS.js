// Función para mostrar alertas de grados Fahrenheit
function appendAlert2(message, type) {
  const alertPlaceholder = document.createElement('div');
  alertPlaceholder.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${JSON.stringify(message)}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  document.body.appendChild(alertPlaceholder);
}

// Función principal al hacer click
document.getElementById('liveAlertBtn2').addEventListener('click', () => {
  // Obtener valor actual del input
  const grados = document.getElementById("inputGrados").value;

  //Convertir los grados celcius a fahrenheit
  const fahrenheit =  (grados*9/5)+32;

  const Fahrentheit ="Los grados Celsius a Fahrenheit son: "+ fahrenheit;
  // Mostrar resultados
  appendAlert2(Fahrentheit, 'success');
});


// Función para mostrar alertas de grados Kelvin
function appendAlert3(message, type) {
  const alertPlaceholder = document.createElement('div');
  alertPlaceholder.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${JSON.stringify(message)}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  document.body.appendChild(alertPlaceholder);
}

// Función principal al hacer click
document.getElementById('liveAlertBtn2').addEventListener('click', () => {
  // Obtener valor actual del input
  const grados = document.getElementById("inputGrados").value;
  //Convertir los grados celcius a kelvin
  const kelvin = grafos = parseFloat(grados) + 273.15;

  const Kelvin ="Los grados Celsius a Kelvin son: "+ kelvin;
  // Mostrar resultados
  appendAlert2(Kelvin, 'success');
});


