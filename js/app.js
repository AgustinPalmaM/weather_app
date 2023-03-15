import API_KEY from "../apiKey.js";

window.addEventListener("load", (e) => {
  
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
  const appID = API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;

  spinner();
  setTimeout(() => {
    
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        clearHTML();
        if (json.cod === "404") {
          printAlert("City not found");
          return;
        }
  
        showWeather(json);
      });
  }, 500);

}

function showWeather(response) {
  const {
    name,
    main: { temp, temp_max, temp_min },
    sys: { country },
  } = response;

  const celsiusTemp = kelToCel(temp);
  const maxCelsiusTemp = kelToCel(temp_max);
  const minCelsiusTemp = kelToCel(temp_min);

  const cityName = document.createElement("P");
  cityName.textContent = `${name} - ${country}`;
  cityName.classList.add("font-bold", "text-2xl");

  const currentTemp = document.createElement("P");
  currentTemp.innerHTML = `${celsiusTemp} &#8451;`;
  currentTemp.classList.add("font-bold", "text-6xl");

  const maxTemp = document.createElement("P");
  maxTemp.innerHTML = `Max:  ${maxCelsiusTemp} &#8451;`;
  maxTemp.classList.add("text-xl");

  const minTemp = document.createElement("P");
  minTemp.innerHTML = `Min:  ${minCelsiusTemp} &#8451;`;
  minTemp.classList.add("text-xl");

  const resultDiv = document.createElement("DIV");
  resultDiv.classList.add("text-center", "text-white");

  resultDiv.appendChild(cityName);
  resultDiv.appendChild(currentTemp);
  resultDiv.appendChild(maxTemp);
  resultDiv.appendChild(minTemp);

  result.appendChild(resultDiv);
}

console.log(process.env)