import { toggleLocationServicesOnDevice } from "wd/lib/commands";
const { Client } = require('pg')

const TodoList = [];

export function addTodo(addModel) {
    if (!addModel || !addModel.todo || typeof(addModel.todo) !== "string" || addModel.todo.trim() == "")
        return "400";

    TodoList.push(addModel);    
    return "200";
     
}

export async function getTodos(){
    const client = new Client()
    client.connect()

    const res = await client.query('SELECT * from todos')
    await client.end()

    return res.rows;
}

export function removeTodo(todoName){

    if(!todoName || typeof(todoName)!=="string" || todoName.trim() =="")
        return "400";

    return "200";
}

