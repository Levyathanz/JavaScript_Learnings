// Declaring Variables from HTML document.
const Apikey = "ee46f080eb4a7f83bf9d0ecbd17c9951";
const city = document.getElementById('js-input')
const searchButton = document.getElementById('js-search-btn');
const icon = document.getElementById('js-icon');
const city_location = document.getElementById('location');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const FeelsLike = document.getElementById('FeelsLike');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const weather = document.querySelector('.js-weather');

// Adding keyboard Event.
document.body.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        weathercall();
    }
})

// Function call through Search Button.
searchButton.addEventListener('click', weathercall)

// Function that calls Weather Updates.
function weathercall() {
    weather.classList.remove('js-weather');
    const location = city.value;
    getWeatherData(location);
}

// Asynchronous Function to fetch data from Openweather.
async function getWeatherData(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${Apikey}&units=metric`);

        if (!response.ok) {
            throw new Error('Server refused to connect')
        }

        const data = await response.json();

        const temp = Math.round(data.main.temp);
        const feels_like = data.main.feels_like;
        const weather_icon = data.weather[0].icon;

        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather_icon}.png" id='icon' alt="Weather_Icon" />`;
        temperature.innerText = `${temp}°C`;
        description.innerText = `${data.weather[0].description}`;
        city_location.innerHTML = `${data.name}`;

        FeelsLike.innerHTML = `<div class="cols">
        <p id="FeelsLike">${feels_like}°C</p>
        <ion-icon name="cloud-circle" id="updates-icon"></ion-icon>
        <p>Feels Like</p>
        </div>`;
        humidity.innerHTML = `<div class="cols">
        <p id="humidity">${data.main.humidity}%</p>
        <ion-icon name="water" id="updates-icon"></ion-icon>
        <p>Humidity</p>
        </div>`;
        wind_speed.innerHTML = ` <div class="cols">
        <p id="wind-speed">${data.wind.speed}m/s</p>
        <ion-icon name="speedometer" id="updates-icon"></ion-icon>
        <p>Wind-Speed</p>
        </div>`;

        city.value = '';
    } catch (error) {
        icon.innerHTML = ``;
        temperature.innerText = ``;
        description.innerHTML = `<div ></div><p id="js-error">Please Check the spell and try again Later!</p>`;
        city_location.innerHTML = ``;

        FeelsLike.innerHTML = ``;
        humidity.innerHTML = ``;
        wind_speed.innerHTML = ``;
        city.value = '';
    }
};
