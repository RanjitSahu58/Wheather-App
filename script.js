const apiKey = "ad2d00dfd7ff9d72e91d1eb81ac2800b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await res.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

  if(data.weather[0].main === "Clouds"){
weatherIcon.src = "Images/cloudy_.png"
  }else if(data.weather[0].main === 'Haze'){
    weatherIcon.src = "Images/Haze.png"
  }else if(data.weather[0].main === 'Thunderstorm'){
    weatherIcon.src = "Images/thunderstorm.png"
  }else if(data.weather[0].main === 'Clear'){
    weatherIcon.src = 'Images/Clear.png'
  }else if(data.weather[0].main === 'Rain'){
    weatherIcon.src = 'Images/full-rain.png'
  }else if(data.weather[0].main === 'Drizzle'){
    weatherIcon.src = 'Images/drizzle.png'
  }else if(data.weather[0].main === 'Mist'){
    weatherIcon.src = 'Images/mist.png'
  }

  document.querySelector('.weather').style.display = "block"

}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

