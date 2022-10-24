var otherCities = document.getElementById("cities")
var weatherDisplay = document.getElementById("weather_display")
var forecastCards = document.querySelectorAll("#forecast_card")
var searchBtn = document.querySelector("#searchBtn")
var apiKey = '959168e8af0d2f45700600a0d8d06e7f'

//Geolocation
navigator.geolocation.getCurrentPosition((position)=> {
  console.log(position.coords.latitude,position.coords.longitude);
})


//Search by city
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

                var lat = data.coord.lat
                var lon = data.coord.lon
                console.log(lat)
                console.log(lon)
            })
        }
    })
  }
    // document.querySelector("#search_input").addEventListener("keyup", function (event) {
    //   if (event.key == "Enter") {
    //    fetchWeather(city);
    //   }    

//Displaying Current Forecast//CURRENTLY: Not working

//Forecast Cards

//Other Cities
