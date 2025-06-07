/* Weather forecast
You are building a web application that fetches data from multiple APIs to display information about different countries. You need to fetch the country details from one API and the weather information for the capital city from another API.
 Here are the requirements:
Use the fetch API to get the country details from https://restcountries.com/v3.1/name/{countryName}.
Use the fetch API to get the weather details from https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true.
The weather API requires the latitude and longitude of the capital city, which you will get from the country details.
Display the country's name, capital city, and current temperature in the console.
Example:
If the user searches for "France", your application should:
Fetch country details from https://restcountries.com/v3.1/name/France.
Extract the capital city and its coordinates (latitude and longitude).
Fetch the current weather for the capital city from the weather API.
Display the results in the console as follows:
Country: France
Capital: Paris
Current Temperature: 18°C*/

async function getWeatherForCountry(countryName) {
  try { 
    const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    if (!countryResponse.ok) throw new Error('Country not found');
    const countryData = await countryResponse.json();

    const country = countryData[0];
    const countryNameClean = country.name.common;
    const capital = country.capital[0];
    const lat = country.capitalInfo.latlng[0];
    const lon = country.capitalInfo.latlng[1];
 
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    if (!weatherResponse.ok) throw new Error('Weather data fetch failed');
    const weatherData = await weatherResponse.json();
    const temperature = weatherData.current_weather.temperature;
 
    console.log(`Country: ${countryNameClean}`);
    console.log(`Capital: ${capital}`);
    console.log(`Current Temperature: ${temperature}°C`);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

 