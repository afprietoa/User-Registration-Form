import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../helpers/getUser";


const useAxiosUser = () => {

    const [state, setState] = useState({
        data:[],
        
    })

    useEffect(() => {

        getUser()
        .then((usrs)=>{

            setState({
            data:usrs
            })
            
        })

    }, [])

 

    return state 
}

export default useAxiosUser