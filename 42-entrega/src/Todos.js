import fs from 'fs';

class Todos{
    constructor(){
        this.todos=[];
    }
    list(){
        return this.todos
    }
    add(title){
        let todo = {
            title,
            complete:false
        }
        this.todos.push(todo);
    }
    complete(title){
        if(this.todos.length===0){
            throw new Error('No hay tareas');
        }
        let todoFound = false;
        this.todos.forEach(todo=>{
            if(todo.title===title){
                todo.complete = true;
                todoFound = true;
                return;
            }
        })
        if(!todoFound){
            throw new Error('Tarea no encontrada');
        }
    }
}
export default Todos;