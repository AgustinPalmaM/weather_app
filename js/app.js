window.addEventListener("load", () => {
  form.addEventListener("submit", searchWeather);
});

function searchWeather(e) {
  e.preventDefault();
  console.log("Searching weather...");

  // validate

  const city = document.querySelector("#ciudad").value;
  const country = document.querySelector("#pais").value;

  if (city === "" || country === "") {
    printAlert("Both fields are required");

    return;
  }

  consultAPI(city, country);
}

function consultAPI(city, country) {
  const appID = "Your own api key here";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      clearHTML();
      if (json.cod === "404") {
        printAlert("City not found");
        return;
      }

      showWeather(json);
    });
}

function showWeather(response) {
  const {
    main: { temp, temp_max, temp_min },
  } = response;

  const celsiusTemp = kelToCel(temp);
  const currentTemp = document.createElement("P");
  currentTemp.innerHTML = `${celsiusTemp} &#8451;`;
  currentTemp.classList.add("font-bold", "text-6xl");

  const resultDiv = document.createElement("DIV");
  resultDiv.classList.add("text-center", "text-white");
  resultDiv.appendChild(currentTemp);

  result.appendChild(resultDiv);
}

