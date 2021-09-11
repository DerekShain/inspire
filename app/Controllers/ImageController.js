import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";

function _drawImage() {
  document.getElementById(
    "image"
  ).style.backgroundImage = `url('${ProxyState.images.largeImgUrl}')`;
}
export class ImageController {
  constructor() {
    ProxyState.on("images", _drawImage);
    console.log("hello from the image controller");
    imageService.getMyImage();
  }
}
