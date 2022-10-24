var otherCities = document.getElementById("cities")
var weatherDisplay = document.getElementById("weather_display")
var forecastCards = document.querySelectorAll("#forecast_card")
var searchBtn = document.querySelector("#searchBtn")
var apiKey = '959168e8af0d2f45700600a0d8d06e7f'

//Search by city//CURRENTLY: Not showing all the weather data. :(


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

//Displaying Current Forecast//CURRENTLY: Not working.



//Forecast Cards//CURRENTLY: Not working.

//Other Cities//CURRENTLY: Not working.