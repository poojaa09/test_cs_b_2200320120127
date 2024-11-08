async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '36e9d09041c561ce3a604c1b4894e1cb'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            alert('City not found!');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
