import axios from "axios"

export const postUser = async (user) =>{
    try{
     const url = 'http://144.217.88.168:3030/api/user'
     
     await axios.post(url, user)

    }
     catch(err){
         console.log(err)
     } 
 }