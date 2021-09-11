export class Weather {
  constructor(wxData) {
    this.long = wxData.coord.lon;
    this.lat = wxData.coord.lat;
    this.icon = wxData.weather.icon;
    this.weather = wxData.weather || wxData.wx[0].weather;
    this.kelvin = wxData.main.temp;
    this.fahrenheit = Math.floor(((wxData.main.temp - 273.5) * 9) / 5 + 32);
    this.celsius = Math.floor(wxData.main.temp - 273.15);
    this.temp = "fahrenheit";
    this.pressure = Math.floor(wxData.main.pressure /  33.864);
    this.wind = wxData.wind.speed;
    this.windD = wxData.wind.deg
    this.clouds = wxData.clouds;
    this.id = wxData.id;
    this.name = wxData.name;
    this.humidity = wxData.main.humidity
  }

  get Template() {
    return /*html */ `
    <div onclick="app.weatherController.tempChange()" class="p3">
      <h2> ${this.name}<img src="http://openweathermap.org/img/wn/${this.wxIcon()}@2x.png">
        <span id="tChange">${this.fahrenheit} F
        </span>
      </h2>
    </div><br/>
        <h6>Sky Conditions: ${this.formatWeather()}</h6>
        <h6>Coordinates:  ${this.lat} Latitude, ${this.long} Longitude</h6>
        <h6>Wind Speed: ${this.wind}</h6>
        <h6>Wind Direction: ${this.windD}</h6>
        <h6>Pressure: ${this.pressure} inHg </h6>
        <h6>Humidity: ${this.humidity} %</h6>
        `;
  }

  formatWeather() {
    let template = "";
    this.weather.forEach((w) => (template += `${w.main} , ${w.description}`));
    return template;
  }

  wxIcon() {
    let template = "";
    this.weather.forEach((w) => (template += `${w.icon}`));
    return template;
  }
}
