import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";


class App {
  imageController = new ImageController()
  quoteController = new QuoteController()
  clockController = new ClockController()
}

window["app"] = new App();
