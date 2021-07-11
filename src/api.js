export default class Weather {
  constructor(location, degree) {
    this.location = location;
    this.degree = degree;
    this.weatherData = "";
    // use response from fetch as an object property instead of calling new api for each method (should be faster)
    this.response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=${this.degree}&APPID=97743d5045e37c098fe1bf79f81a89a7`,
      { mode: "cors" }
    );
  }
  // main, calls all other methods for gathering data
  async getInfo() {
    const temp = await this.getTemp();
    const country = await this.getCountry();
    const minTemp = await this.getMinTemp();
    const maxTemp = await this.getMaxTemp();
    return {
      country,
      temp,
      minTemp,
      maxTemp,
    };
  }

  // methods for using fetch and storing data
  async getTemp() {
    this.weatherData = await response.json();
    const temp = this.weatherData.main.temp;

    return temp;
  }
  async getMinTemp() {
    this.weatherData = await this.response.json();
    const temp = this.weatherData.main.temp_min;

    return temp;
  }
  async getMaxTemp() {
    this.weatherData = await this.response.json();
    const temp = this.weatherData.main.temp_max;

    return temp;
  }
  async getCountry() {
    let country = [];
    this.weatherData = await this.response.json();
    country = this.weatherData.sys.country;

    return country;
  }
}
