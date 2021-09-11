import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _drawTodos() {
  let template = "";
  ProxyState.todos.forEach((t) => (template += t.Template));
  document.getElementById("todo").innerHTML = template;
  let others = ProxyState.todos.filter((t) => t.completed);
  document.getElementById(
    "counter"
  ).innerHTML = `${others.length} out of ${ProxyState.todos.length}`;
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
    const taskData = {
      description: form.description.value,
    };

    await todosService.addTodo(taskData);
    form.reset();
  }
  async deleteTodo(id) {
    // @ts-ignore
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          console.log(id);
          // @ts-ignore
          await todosService.deleteTodo(id);
          // @ts-ignore
          Swal.fire("Deleted!", "Task has been deleted!", "success");
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
