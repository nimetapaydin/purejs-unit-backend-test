// todo servisi
// {"todo": "Bir şeyler yap"} diye veri yüklendiğinde veritabına eklesin
// todolar getirildiğinde bunun gibi sonuçları dönsün [{"todo": "Bir şeyler yap"}]
import { addTodo, getTodos } from './index';

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

    test("todolar getirildiğinde dizi dönmelidir", () => {
        const todolar = getTodos();
        expect(todolar instanceof Array).toBeTruthy();

    })

    test("Eğer bir todo gelirse ilk objesi todo içermelidir", () => {
        const todolistesi = getTodos();
        const ilktodo = todolistesi[0];

        expect(ilktodo.todo).toBeTruthy()
    })

    test("Todo silindiğinde 200 dönmelidir", () => {
        
    })

})