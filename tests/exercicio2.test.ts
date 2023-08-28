import { exercicio2 } from "../src/exercicio2";


describe("Essa função deve receber uma data nesse formato aaaa/mm/dd e retornar dd/mm/aaa", () => {

    test("verifica se o valor recebido é de fato uma data válida",  () => {
        expect(exercicio2("aaaa/mm/dd")).toBe(null)
    })

    test("Recebe uma data válida no formato aaaa/mm/dd e devolve uma data dd/mm/aaa.",  () => {
        expect(exercicio2("2023/05/25")).toBe("25/05/2023")
    })
})