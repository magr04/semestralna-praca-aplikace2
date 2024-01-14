$(document).ready(function() {
    $('#getWeatherBtn').click(function() {
        const selectedCity = $('#city-select').val();
        const apiKey = '9148fefcb73a4be06303fd90d08f20e9';
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + selectedCity + '&appid=' + apiKey + '&units=metric';

        console.log('Fetching dát pre:', selectedCity);

        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.log('API Odozva:', response);
                var weatherInfo = 'Počasie v ' + selectedCity + ': ' + response.weather[0].description + ', Teplota: ' + response.main.temp + '°C, Vlhkosť: ' + response.main.humidity + '%';
                $('#weather-info').text(weatherInfo);
            },
            error: function(error) {
                console.log('Error:', error);
                $('#weather-info').text('Nepodarilo sa získať dáta o počasí');
            }
        });
    });
});
