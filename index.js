export function addTodo(addModel) {
    if (addModel.todo = null || addModel.todo == {} || addModel.todo.trim() == "")
        return "400";

    return "200";
}

