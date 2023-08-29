import { exercicio3 } from "../src/exercicio3";

const users: {name: string, age: number}[] = [
    {
        name: "Wesllei",
        age: 30
    },
    {
        name: "Antonia",
        age: 65
    },
    {
        name: "Pâmela",
        age: 29
    },
    {
        name: "Astrodev",
        age: 30
    }
]

describe("A função deve retornar falso o verdadeiro quando uma busca for solicitada em uma lista", () => {

    test("Verificar se a lsita é uma array", () => {
        expect(exercicio3(users, "Antonia")).toBe(true)
    })

    test("Verificar se a lsita é igual a zero", () => {
        expect(exercicio3([], "Antonia")).toBe(null)
    })

    test("Verificar se todas propriedades existem", () => {
        expect(exercicio3([{name: "Mariana", age: 18}, {name: 'fernanda', age: 33}, {name: "fátima"}] as any, "Antonia")).toBe(null)
    })

    test("Verificar se todos os valores recebidos são do tipo esperado", () => {
        expect(exercicio3([{name: "Mariana", age: 18}, {name: 'fernanda', age: 33}, {name: ["fátima"], age: 28}] as any, "Antonia")).toBe(null)
    })

    test("Verificar se o Astrodev esta na lista", () => {
        expect(exercicio3(users, "Astrodev")).toBe(true)
    })
})