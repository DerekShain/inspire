import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Image').Image} */
  images = null

  /** @type {import('./Models/Quote').Quote} */
  quotes = null
  /** @type {import('./Models/Weather').Weather} */
  weather = null
  /**@type {import('./Models/Todos').Todos[]} */
  todos = []
}
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
