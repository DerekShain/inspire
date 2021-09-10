import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";


class App {
  imageController = new ImageController()
  quoteController = new QuoteController()
}

window["app"] = new App();
