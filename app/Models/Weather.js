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
    this.wind = wxData.wind;
    this.clouds = wxData.clouds;
    this.id = wxData.id;
    this.name = wxData.name;
  }

  get Template() {
    return /*html */ `
    <div onclick="app.weatherController.tempChange()">
    <h5>${
      this.name
    }<img src="http://openweathermap.org/img/wn/${this.wxIcon()}@2x.png">
        <span id="tChange">${this.fahrenheit} F
        </span>
        </h5>
        </div>
        
        <small>Sky Conditions: ${this.formatWeather()}</small>
        <small>Coordinates: ${this.long}, ${this.lat}</small>
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
