export const exercicio3 = (listUsers: InputUser[], findUser: string): null | boolean => {

    
    if(!Array.isArray(listUsers) || listUsers.length === 0){
        return null
    }

    if(typeof findUser !== "string"){
        return null
    }

    const listValid = listUsers.map((user, index) => {
        
        if(!user.age || !user.name){
            return null
        }
    
        if(typeof user.age !== "number" || typeof user.name !== "string"){
            return null
        }
      
    })

    
    if(listValid.filter(user => user === null).length > 0){
        return null
    }
    
    return listUsers.findIndex(user => user.name.toLowerCase() === findUser.toLowerCase()) > -1 
}


interface InputUser {
    name: string,
    age: number
}