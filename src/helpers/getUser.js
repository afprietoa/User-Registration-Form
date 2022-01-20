import axios from "axios"

export const getUser = async () =>{
   try{
    const url = 'http://144.217.88.168:3030/api/user'
    const resp= await axios.get(url)
    console.log(resp.data.data)
    
    const usrs = resp.data.data 

    const users = usrs.map(usr =>{
        return{
            firstName: usr.firstName,
            lastName: usr.lastName,
            completeName: usr.completeName,
            email: usr.email,
            sicCode: usr.sicCode,
            sicCodeType: usr.sicCodeType,
            mobilePhone: usr.mobilePhone,
            nationality: usr.nationality,
            createdBy: usr.createdBy,
        }
    })
    return users
   }
    catch(err){
        console.log(err)
    } 
}