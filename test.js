// todo servisi
// {"todo": "Bir şeyler yap"} diye veri yüklendiğinde veritabına eklesin
// todolar getirildiğinde bunun gibi sonuçları dönsün [{"todo": "Bir şeyler yap"}]
import { addTodo, getTodos, removeTodo } from './index';
import Repository from './repository';

describe("Todo servisi", () => {
    test("todo eklendiğinde 200 dönmelidir", () => {
        const newTodo = {
            "todo": "Yeni Todo"
        };

        const status = addTodo(newTodo);

        expect(status).toEqual("200");
    })

    test("boş todo eklendiğinde 400 dönmelidir", () => {
        const newTodo =  {
            "todo":" "
        };
        const status = addTodo(newTodo);
        expect(status).toEqual("400");
            
    })

    test("Yanlış model gönderilirse 400 dönmelidir", () => {
        const badmodel1 =  {
            "todo": null
        };

        const badmodel2 =  {
            "todo": {}
        };

        const badmodel3 = null;

        const status1 = addTodo(badmodel1);
        const status2 = addTodo(badmodel2);
        const status3 = addTodo(badmodel3);
        expect(status1).toEqual("400");
        expect(status2).toEqual("400");
        expect(status3).toEqual("400");
    })

    test("todolar getirildiğinde dizi dönmelidir", async () => {
        const repo = new Repository();
        const todolar = await getTodos(repo);
        expect(todolar instanceof Array).toBeTruthy();

    })

    test("Eğer bir todo gelirse ilk objesi todo içermelidir", async () => {
        const repo = new Repository();
        const todolistesi = await getTodos(repo);
        const ilktodo = todolistesi[0];

        expect(ilktodo.todo).toBeTruthy()
    })

    test("Todo eklendiğinde eklenen todo getTodostan gelmelidir", async () =>{
        const repo = new Repository();

        const newTodo = {
            "todo":"Yeni Todo"
        };
        addTodo(newTodo);
        const todolar = await getTodos(repo);
        let existTodo = todolar.some(x => x.todo == newTodo.todo)
        expect(existTodo).toBeTruthy()
    })

    test("Todo silindiğinde 200 dönmelidir", () => {
       
       const deleteTodoStatus = removeTodo("Yeni Todo")

        expect(deleteTodoStatus).toEqual("200");
    })

    test("Boş ve geçersiz Todo silinmek istendiğinde 400 dönmelidir", () => {
       
        const bosmodel = {
        };
        const nullmodel = null;
        const bosstring= "";
        const bosstringiki= " ";

        const deleteTodoStatusiki = removeTodo(bosmodel);
        const deleteTodoStatusuc = removeTodo(nullmodel);
        const deleteTodoStatusdort = removeTodo(bosstring);
        const deleteTodoStatusbes = removeTodo(bosstringiki);

        expect(deleteTodoStatusiki).toEqual("400");
        expect(deleteTodoStatusuc).toEqual("400");
        expect(deleteTodoStatusdort).toEqual("400");
        expect(deleteTodoStatusbes).toEqual("400");
    
    })


})