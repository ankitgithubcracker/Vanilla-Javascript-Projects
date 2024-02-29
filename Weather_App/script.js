const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description");
const humitity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");

const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");


searchBtn.addEventListener("click", function () {
    checkWeather(inputBox.value);
});



async function checkWeather(city) {
    const api_key = "8a8aa787dabfc9fa2d29622c155ec673";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    
    if (weather_data.cod == `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humitity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    
    switch (weather_data.weather[0].main) {
        case "Clouds":
            weather_img.src = "img/cloud.png";
            break;
        case "Clear":
            weather_img.src = "img/clear.png";
            break;
            case "Rain":
            weather_img.src = "img/rain.png";
            break;
        case "Mist":
            weather_img.src = "img/mist.png";
            break;
            case "Snow":
            weather_img.src = "img/snow.png";
            break;
        }
        
        console.log(weather_data);
    }
