export class Todos {
    constructor(todoData) {
        this.id = todoData.id;
        this.completed = todoData.completed;
        this.user = todoData.user;
        this.description = todoData.description;
    }

    get Template() {
        return /*html*/ `
        
        <form style = "display: flex; align-items: center; justify-content: space-between;">
      <input type="checkbox" id="${this.id}" name="checkbox" 
     ${this.completed ? "checked" : ""
            } onclick="app.todosController.toggleDone('${this.id}')" title="Check if completed.">
      <label for="checkbox"> 
   
      ${this.description} 
      <i class="fas fa-eraser" title="Erase Task" onclick="app.todosController.deleteTodo('${this.id
            }')" ></i>
  
      </label>
    </form>
        `;
    }
}