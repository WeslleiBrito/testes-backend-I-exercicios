import { exercicio1 } from "../src/exercicio1";


describe("Recebe um texto com um número e retorna um número do tipo number", () => {

    test("Deve retornar um null caso o valor recebido for um texto que não seja número", () => {
        expect(exercicio1("dez")).toBe(null)
    })

    test("Deve retornar um número", () => {
        expect(exercicio1("10")).toBe(10)
    })


})