
export class Image{
    // @ts-ignore
    constructor(imageData){
        this.url = imageData.url
        this.imgUrl = imageData.imgUrl
        this.query = imageData.query
        this.author = imageData.author 
        this.largeImgUrl = imageData.largeImgUrl 
    }
   
}
