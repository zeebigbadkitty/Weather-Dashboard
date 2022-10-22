var otherCities = document.getElementById("cities")
var weatherDisplay = document.getElementById("weather_display")
var forecastCards = document.querySelectorAll("#forecast_card")
var searchBtn = document.querySelector("#searchBtn")
var apiKey = '959168e8af0d2f45700600a0d8d06e7f';

//Search by city.

// var submit=function(){
//     cityValue = $('#search_input').val()
//     console.log(cityValue)
// }
// submit.addEventListener("submit",submit)

searchBtn.addEventListener('click', getApi)
function getApi() {
    var city = document.getElementById("search_input").value
    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='+city+'&appid=959168e8af0d2f45700600a0d8d06e7f'
    fetch(requestUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                console.log(data.list)
            })
        }
    })
}
//Displaying Current Forecast

var currentForecast = document.getElementById('current_forecast')


//Forecast Cards