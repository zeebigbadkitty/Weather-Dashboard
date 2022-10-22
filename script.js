var otherCities = document.getElementById("cities")
var weatherDisplay = document.getElementById("weather_display")
var forecastCards = document.querySelectorAll("#forecast_card")
var searchBtn = document.querySelector("#searchBtn")
var city = document.querySelector("#search_input").value
var apiKey = '959168e8af0d2f45700600a0d8d06e7f';

//Search by city.



searchBtn.addEventListener('click', getApi);
function getApi() {console.log(city)
    var requestUrl = 'https://api.openweathermap.org/data/2.5/direct?q='+city.value+'&appid=959168e8af0d2f45700600a0d8d06e7f';
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