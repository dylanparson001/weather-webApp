// api http://api.openweathermap.org/data/2.5/weather?q=London&APPID=97743d5045e37c098fe1bf79f81a89a7
// Function to be used by index
export default function fetchWeather(location) {
  const weather = new Weather(location);
  weather.getWeather();
}
class Weather {
  //constructor for location
  constructor(location) {
    this.location = location;
    //this.weatherData = "";
  }

  // method for using fetch and storing data
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.location}&APPID=97743d5045e37c098fe1bf79f81a89a7`,
      { mode: "cors" }
    );
    this.weatherData = await response.json();
    const temp = JSON.parse(this.weatherData.main.temp);
    console.log(temp);
  }
  //getting temp from data
}
