import { ProxyState } from "../AppState.js";
import { Todos } from "../Models/Todos.js";

// @ts-ignore
const sandBoxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/dereks/todos",
});

class TodosService {
    constructor() {
        console.log("hello from the todos service");
        this.getTodo();
    }
    async addTodo(todoData) {
        let res = await sandBoxApi.post("", todoData);
        ProxyState.todos = [...ProxyState.todos, new Todos(res.data)];
    }
    async getTodo() {
        let res = await sandBoxApi.get();
        ProxyState.todos = res.data.map((t) => new Todos(t));
    }
    async deleteTodo(id) {
        await sandBoxApi.delete(id);
        ProxyState.todos = ProxyState.todos.filter((t) => t.id !== id);
    }
    async toggleDone(id) {
        const res = ProxyState.todos.find((t) => t.id === id);
        res.completed = !res.completed;
        await sandBoxApi.put(`${id}`, res);
        this.getTodo();
    }
}

export const todosService = new TodosService();