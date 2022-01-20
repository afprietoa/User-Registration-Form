import axios from "axios"

export const getNatl = async () =>{
   try{
    const url = 'https://restcountries.com/v2/all'
    const resp= await axios.get(url)
    console.log(resp.data)
    
    const ctries = resp.data 

    const natls = ctries.map(ctry =>{
        return{
            name: ctry.name,
        }
    })
    return natls
   }
    catch(err){
        console.log(err)
    } 
}