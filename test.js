// todo servisi
// {"todo": "Bir şeyler yap"} diye veri yüklendiğinde veritabına eklesin
// todolar getirildiğinde bunun gibi sonuçları dönsün [{"todo": "Bir şeyler yap"}]
import { addTodo } from './index';

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
        const badmodel1= null;
        const badmodel2 = { };

        const status1 = addTodo(badmodel1);
        const status2 = addTodo(badmodel2);
        expect(status1).toEqual("400");
        expect(status2).toEqual("400");
    })
})