import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";
function _drawQuote(){
    document.getElementById("quote").innerHTML = ProxyState.quotes.Template
}

export class QuoteController{
    constructor(){
        ProxyState.on("quotes", _drawQuote)
        this.getQuote()
        console.log('test', quoteService)
    }
    getQuote() {
        quoteService.getQuote()
    }
}