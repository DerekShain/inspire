import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";

// @ts-ignore
const sandBoxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/weather",
});
class WeatherService {
  constructor() {
    console.log("hello from the weather service");
  }
  async getWx() {
    let res = await sandBoxApi.get();
    ProxyState.weather = new Weather(res.data);
  }
  tempType() {
    let f = "fahrenheit";
    let c = "celsius";
    if (ProxyState.weather.temp == f) {
      ProxyState.weather.temp = c;
    } else {
      ProxyState.weather.temp = f;
    }
  }
}

export const weatherService = new WeatherService();
