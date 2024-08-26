document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'b8124f6fcf85fe8b211cd77a0ae3633b'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weather-result').style.display = 'block';
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = data.main.temp;
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('humidity').textContent = data.main.humidity;
                document.getElementById('wind-speed').textContent = data.wind.speed;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => console.error('Error:', error));
});
