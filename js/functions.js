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
