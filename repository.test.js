//veri tabanına bağlanır read metodu ile query i çalıştırıp verileri okur
// insert metodu ile veri ekler remove metodu ile todo yu siler

import Repository from "./repository";
describe ("Veritabanı servi", (todo)=> {
    test("Geçersiz sorgular hata vermelidir", () => {
        if (!todo || !todo.todo || typeof(todo.todo) !== "string" || todo.todo.trim() == "")
        return "400";
        
    })
})

export function removeTodo(todoName){

    if(!todoName || typeof(todoName)!=="string" || todoName.trim() =="")
        return "400";

    return "200";
}