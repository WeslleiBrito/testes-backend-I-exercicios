
export const exercicio1 = (numberText: string) => {

    if(isNaN(Number(numberText))){
        return null
    }

    return Number(numberText)
}