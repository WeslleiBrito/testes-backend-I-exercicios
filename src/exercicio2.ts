

export const exercicio2 = (date: string) => {

    const regex = /^\d{4}\/\d{2}\/\d{2}$/


    if(!regex.test(date)){
        return null
    }

    return `${date.slice(8)}/${date.slice(5, 7)}/${date.slice(0, 4)}`
}