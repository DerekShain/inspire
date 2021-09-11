import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWx() {
  // @ts-ignore
  document.getElementById("weather").innerHTML = ProxyState.weather.Template;
}
function _drawTemp() {
  // @ts-ignore
  if (ProxyState.weather.temp == "fahrenheit") {
    document.getElementById(
      "tChange"
    ).innerHTML = `${ProxyState.weather.fahrenheit} F`;
  } else {
    document.getElementById(
      "tChange"
    ).innerHTML = `${ProxyState.weather.celsius} C`;
  }
}
export class WeatherController {
  tempDefault = "fahrenheit";
  constructor() {
    console.log("hello from the weather controller");
    ProxyState.on("weather", _drawWx);
    this.getWx();
  }
  getWx() {
    weatherService.getWx();
  }
  tempChange() {
    weatherService.tempType();
    _drawTemp();
  }
}
