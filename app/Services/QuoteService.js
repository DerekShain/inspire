import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"

// @ts-ignore
const sandBoxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/quotes"
})
class QuoteService{
    constructor(){
        console.log("hello from the quote service")
    }
    async getQuote(){
        let res = await sandBoxApi.get()
        ProxyState.quotes = new Quote(res.data)
    }
}

export const quoteService = new QuoteService()