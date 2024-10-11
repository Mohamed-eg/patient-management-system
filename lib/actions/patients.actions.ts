import { ID, Query } from "node-appwrite"
import { users } from "../appWrite.config"

export const createUser = async (user:CreateUserParams)=>{

    try {
        console.log(user)
        const newUser =await users.create(ID.unique(),user.email,user.phone,undefined,user.name)
        
        console.log(newUser)
        return newUser
    } catch (error:any) {
        if (error && error?.code === 409) {
            const documents =await users.list([
                Query.equal('email',[user.email])
            ])
            return documents?.users[0]
        }
        
    }
}