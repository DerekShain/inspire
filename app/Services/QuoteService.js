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
        console.log('get the res', res)
        ProxyState.quotes = new Quote(res.data)
        console.log("test2", ProxyState.quotes)
    }
}

export const quoteService = new QuoteService()