var otherCities = document.getElementById("cities")
var weatherDisplay = document.getElementById("weather_display")
var forecastCards = document.querySelectorAll("#forecast_card")
var searchBtn = document.querySelector("#searchBtn")
var city = document.querySelector("#search_input")
var cityValue = city.val()
var apiKey = '959168e8af0d2f45700600a0d8d06e7f';

//Search by city.



searchBtn.on('click', getApi(city));
function getApi(city) {
    console.log(cityValue)
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+city+'&appid='+apiKey;
    fetch(requestUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function (data) {
            })
        }
    })
}

//Displaying Current Forecast

var currentForecast = document.getElementById('current_forecast')


//Forecast Cards