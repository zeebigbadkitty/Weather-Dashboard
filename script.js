var otherCities = document.getElementById("cities")
var weatherDisplay = document.getElementById("weather_display")
var forecastCards = document.querySelectorAll("#forecast_card")
var searchBtn = document.querySelector("#searchBtn")
var apiKey = '959168e8af0d2f45700600a0d8d06e7f'

//Search by city.


searchBtn.addEventListener('click', fetchWeather)
function fetchWeather() {
    var currentForecast = document.querySelector('#current_forecast')
    var city = document.getElementById("search_input").value
    console.log(city)
    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='+city+'&units=imperial&appid=959168e8af0d2f45700600a0d8d06e7f'
    fetch(requestUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
            })
        }
    })
    // document.querySelector("#search_input").addEventListener("keyup", function (event) {
    //   if (event.key == "Enter") {
    //    fetchWeather(city);
    //   }    

//Displaying Current Forecast//CURRENTLY: Not working
function weatherDisplay(data){
    var { name } = data;
    var { icon, description } = data.weather[0];
    var { temp, humidity } = data.main;
    var { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temperature").innerText = temp + "°F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
}
};

//Forecast Cards

//Other Cities//CURRENTLY: Not working
var recentSearches;

if (localStorage.recentSearches && localStorage.recentSearches != "") {
  recentSearches = JSON.parse(localStorage.recentSearches);
} else {
  recentSearches = [];
}

var makeListItem = function(text, parent) {
  var listItem = document.createElement("li");
  listItem.textContent = text;
  listItem.className = "list-group-item";
  parent.appendChild(listItem);
};

recentSearches.forEach(element => {
  makeListItem(element, ul);
});
