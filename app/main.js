import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  imageController = new ImageController();
  quoteController = new QuoteController();
  clockController = new ClockController();
  weatherController = new WeatherController();
  todosController = new TodosController();
}

window["app"] = new App();
