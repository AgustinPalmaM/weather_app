function printAlert(message, typeMessage) {
  const alert = document.querySelector(".bg-red-100");

  if (!alert) {
    const alert = document.createElement("DIV");

    alert.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alert.innerHTML = `
      <strong class="font-bold">Error</strong>
      <span class="block">${message}</span>
    `;

    container.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 1500);
  }
}

// Transform kelvin temperature to celsius temperature
const kelToCel = kelvinTemp =>  (kelvinTemp - 273.15).toFixed(2);

// Clear the div with temperature result, so this avoid duplicated result on the screen 
function clearHTML() {
  while (result.firstChild) {
    result.firstChild.remove();
  }
}

function spinner() {

  clearHTML();
  const divSpinner = document.createElement('DIV');
  divSpinner.classList.add('sk-fading-circle');

  divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
  `;

  result.appendChild(divSpinner);

}