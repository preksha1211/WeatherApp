let input=document.getElementById('cityInput');
let city='';
input.addEventListener('input',(e)=>{
    city=e.target.value;
})

let btn=document.getElementById('searchBtn');
btn.addEventListener('click',(e)=>{
      getWeather(city);
})


async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e1e092b9656df721448e1d3c8ff789cd&units=metric`);
        const data = await response.json();
        document.getElementById('weatherResult').innerHTML = `
    <h2>${data.name}</h2>
    <p>🌡️ Temperature: ${data.main.temp}°C</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>🌤️ ${data.weather[0].description}</p>
`;
    } catch(error) {
        document.getElementById('weatherResult').innerHTML = `
         <h2>something went wrong</h2>`
    }
}