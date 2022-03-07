export function addTodo(addModel) {
    if (!addModel || !addModel.todo || typeof(addModel.todo) !== "string" || addModel.todo.trim() == "")
        return "400";

    return "200";
}

export function getTodos(){
    return []
}

