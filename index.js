export function addTodo(addModel) {
    if (addModel.todo.trim() == "")
        return "400";

    return "200";
}