var otherCities = document.getElementById("cities");
var weatherDisplay = document.getElementById("weather_display");
var searchBtn = document.querySelector("#searchBtn");
var apiKey = "959168e8af0d2f45700600a0d8d06e7f";
var city;


//Geolocation
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});

//Search by city
searchBtn.addEventListener("click", fetchWeather);
function fetchWeather() {
  var currentForecast = document.querySelector("#current_forecast");
  city = document.getElementById("search_input").value;
  console.log(city);
  var requestUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&units=imperial&appid=959168e8af0d2f45700600a0d8d06e7f";

  fetch(requestUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        var lat = data[0].lat;
        var lon = data[0].lon;
        console.log(lat);
        console.log(lon);

        fiveDayForecast(lat, lon);
      });
    }
  });
}

function fiveDayForecast(lat, lon) {
  var requestUrlFull =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&appid=" +
    apiKey;
  fetch(requestUrlFull).then(function (response) {
    //Five Day Forecast
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        var fiveDayForecast = [];
        for (i = 0; i < data.list.length; i++) {
          if (data.list[i].dt_txt.includes("00:00:00")) {
            fiveDayForecast.push(data.list[i]);
          }
        }
        console.log(fiveDayForecast);
        displayWeather(fiveDayForecast);

      });
    }
  });
}




function displayWeather(weatherData) {
  // var today = moment().format("MM/DD/YYYY");
  // console.log(today)

  document.querySelector(".city").textContent =
  "The current weather in "+city+" is:";
//document.querySelector(".icon").textContent='<img src="http://openweathermap.org/img/wn/'+data.list[0].weather[0].icon+'@2x.png">';
  document.querySelector(".description").textContent =
  "Description: "+weatherData[0].weather[0].description;
  document.querySelector(".temperature").textContent =
    "The current temperature is " + weatherData[0].main.temp + "°";
  document.querySelector(".humidity").textContent =
  "Humidity: "+weatherData[0].main.humidity+'%.';
  document.querySelector(".wind").textContent =
  "Wind speed: "+weatherData[0].wind.speed+"mph";
}

//Forecast Cards
var forecastCards = document.querySelectorAll("#forecast_card");
var listEl = document.createElement("ol");
listEl.append("#weather_display")
document.body.append
var forecastCard1 = document.createElement("li");
forecastCard1.classList.add("forecast_card");
var forecastCard2 = document.createElement("li");
forecastCard2.classList.add("forecast_card");
var forecastCard3 = document.createElement("li");
forecastCard3.classList.add("forecast_card");
var forecastCard4 = document.createElement("li");
forecastCard4.classList.add("forecast_card");
var forecastCard5 = document.createElement("li");
forecastCard5.classList.add("forecast_card");



//Other Cities
//Search history based on input stored in local storage.