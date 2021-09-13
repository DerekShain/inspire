import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _drawTodos() {
    let template = "";
    ProxyState.todos.forEach((t) => (template += t.Template));
    document.getElementById("todo").innerHTML = template;
    let others = ProxyState.todos.filter((t) => t.completed);
    document.getElementById("counter").innerHTML = `You have ${others.length} out of ${ProxyState.todos.length} completed.`;
    console.log(ProxyState.todos);
}
export class TodosController {
    constructor() {
        ProxyState.on("todos", _drawTodos);
        console.log("hello from the todos controller");
        _drawTodos();
    }
    async addTodo() {
        event.preventDefault();
        /**
         * @type {HTMLFormElement}
         */
        //@ts-ignore
        const form = event.target;
        const taskData = { description: form.description.value, };
        await todosService.addTodo(taskData);
        form.reset();
        // @ts-ignore
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'New item added to list',
            showConfirmButton: false,
            timer: 1500
        })
    }
    async deleteTodo(id) {
        // @ts-ignore
        Swal.fire({
            title: "Are you sure?",
            text: "This will be erased forever!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, erase it!",
        }).then(async(result) => {
            if (result.isConfirmed) {
                console.log(id);
                // @ts-ignore
                await todosService.deleteTodo(id);
                // @ts-ignore
                Swal.fire("Erased!", "Task has been erased!", "success");
            }
        });
    }
    async toggleDone(id) {
        await todosService.toggleDone(id);
    }
    async getTodo() {
        await todosService.getTodo();
    }
}