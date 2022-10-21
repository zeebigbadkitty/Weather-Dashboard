var city=''
var searchCity=document.getElementById("searchTxt").value;
var apiKey = '959168e8af0d2f45700600a0d8d06e7f'



var searchInput = document.getElementById("search_input")
searchInput.addEventListener("click", getApi)

function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?id=6167865&appid={959168e8af0d2f45700600a0d8d06e7f}&units=imperial';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
    

      for (var i = 0; i < data.length; i++) {
        console.log(data[i].name);
      }
    })}
  