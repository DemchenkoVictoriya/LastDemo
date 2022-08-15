let now = new Date();
let h6 = document.querySelector("h6");
let date = now.getDate();
let hours = String(now.getHours()).padStart(2, "0");
//let hours = now.getHours();
//let minutes = now.getMinutes();
let minutes = String(now.getMinutes()).padStart(2, "0");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h6.innerHTML = `${day} ${date}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    function displayWeather(response) {
      let temperature1 = Math.round(response.data.main.temp);
      let weatherDiv = document.querySelector("#temp");
      //  let description = response.data.weather[0].description;
      weatherDiv.innerHTML = `${temperature1} `;
      h1.innerHTML = `${response.data.name}`;
    }
    let key = "4c1c24170c2786fdf6e69a6fe3fb26f5";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${key}&units=metric`;
    axios.get(url).then(displayWeather);
  }
}
let form = document.querySelector("#button-addon2");
form.addEventListener("click", search);
let form1 = document.querySelector("#search-form");
form1.addEventListener("submit", search);

function changeTemp(event) {
  event.preventDefault();
  let tempF = document.querySelector("#temp");
  let varibTem = 19;
  let result = (varibTem * 9) / 5 + 32;
  result = Math.round(result);
  tempF.innerHTML = `${result}`;
}
let faren = document.querySelector("#fahrenheit-link");
faren.addEventListener("click", changeTemp);

function changeBack(event) {
  event.preventDefault();
  let tempC = document.querySelector("#temp");
  let varibTem1 = 66;
  let result1 = ((varibTem1 - 32) * 5) / 9;
  result1 = Math.round(result1);
  tempC.innerHTML = `${result1}`;
}
let cels = document.querySelector("#celsius-link");
cels.addEventListener("click", changeBack);
//погода в поточному місті
function curCityTemp(event) {
  event.preventDefault();

  let apiKey = "4c1c24170c2786fdf6e69a6fe3fb26f5";
  function showTemperature(response) {
    let curTemp = Math.round(response.data.main.temp);
    let location = response.data.name;
    let temperatureElement = document.querySelector("h1");
    let temperatureElementNum = document.querySelector("#temp");
    temperatureElement.innerHTML = ` ${location} `;
    temperatureElementNum.innerHTML = `${curTemp} `;
  }

  function handlePosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature);
  }
  function showLocalTemperature() {
    navigator.geolocation.getCurrentPosition(handlePosition);
  }
  showLocalTemperature();
}

let curButton = document.querySelector("#currentlyLocation");
curButton.addEventListener("click", curCityTemp);
