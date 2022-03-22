import { toggleLocationServicesOnDevice } from "wd/lib/commands";
const TodoList = [];

export function addTodo(addModel) {
    if (!addModel || !addModel.todo || typeof(addModel.todo) !== "string" || addModel.todo.trim() == "")
        return "400";

    TodoList.push(addModel);    
    return "200";
     
}

export function getTodos(){

    return TodoList
}

export function removeTodo(todoName){

    if(!todoName || typeof(todoName)!=="string" || todoName.trim() =="")
        return "400";

    return "200";
}

