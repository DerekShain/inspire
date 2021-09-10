import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";

// @ts-ignore
const sandBoxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/images"
    
})
class ImageService{
    constructor(){
        console.log("hello from the image service")
        this.getMyImage()
    }
    async getMyImage(){
        let res = await sandBoxApi.get()
        ProxyState.images = new Image(res.data)
    }
}

export const imageService = new ImageService()