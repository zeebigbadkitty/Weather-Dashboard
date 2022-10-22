var otherCities = document.getElementById("#cities")
var weatherDisplay = document.getElementById("#weather_display")
var forecastCards = document.querySelectorAll("forecast_card")
var searchBtn = document.getElementById("#searchBtn")
var apiKey = '959168e8af0d2f45700600a0d8d06e7f';

//Search by city.

searchBtn.addEventListener('click', getApi);
function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=959168e8af0d2f45700600a0d8d06e7f';
    fetch(requestUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
            })
        }
    })
}

//Displaying Current Forecast

var currentForecast = document.getElementById('current_forecast')
currentForecast.insertAdjacentText("afterend", "")

//Forecast Cards