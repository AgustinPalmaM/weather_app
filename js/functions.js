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
