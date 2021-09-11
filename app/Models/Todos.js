export class Todos {
  constructor(todoData) {
    this.id = todoData._id;
    this.completed = todoData.completed;
    this.user = todoData.user;
    this.description = todoData.description;
    this.id = todoData.id;
  }

  get Template() {
    return /*html*/ `
        
        <form >
      <input type="checkbox" id="${this.id}" name="checkbox" 
     ${this.completed ? "checked" : ""
      } onclick="app.todosController.toggleDone('${this.id}')" >
      <label for="checkbox"> 
   
      ${this.description} 
      <i class="fas fa-trash-alt trashPosition" onclick="app.todosController.deleteTodo('${this.id
      }')"></i>
  
      </label>
    </form>
        `;
  }
}
