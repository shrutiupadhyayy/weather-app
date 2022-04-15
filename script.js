let weather = {
    "apiKey" : "0c8221601613f44ed5d6ad8b745b3c40",
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid=" +
            this.apiKey
        )
         .then((response) => response.json())
         .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind; //data.wind contains speed so speed is going to be taken out of the object and made into a variable
      document.querySelector(".city").innerText = "Weather in " + name; 
      //The querySelector() method returns the first element that matches a CSS selector
      document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";

  },
  search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
  }

};
document.querySelector(".search button").addEventListener("click", function(){
  weather.search();
})

document.querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
 // weather.fetchWeather("Denver");