import { array, object, string, number } from 'zod';

const objectSchema = object(
    {
        name: string(),
        age: number()
    }
)

const arraySchema = array(objectSchema).min(1)

export const exercicio3 = (listUsers: InputUser[], findUser: string): null | boolean => {

    try {
        
        arraySchema.parse(listUsers)
        
        return listUsers.findIndex(user => user.name.toLowerCase() === findUser.toLowerCase()) > -1 

    } catch (error) {

        return null
    }
    
}


interface InputUser {
    name: string,
    age: number
}