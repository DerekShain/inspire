import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  imageController = new ImageController()
  quoteController = new QuoteController()
  clockController = new ClockController()
  weatherController = new WeatherController()
}

window["app"] = new App();
