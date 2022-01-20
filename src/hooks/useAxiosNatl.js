import { useEffect } from "react";
import { useState } from "react";
import { getNatl } from "../helpers/getNatl";

const useAxiosNatl = () => {

    const [state, setState] = useState({
        data:[],
        
    })

    useEffect(() => {

        getNatl()
        .then((ctries)=>{

            setState({
            data:ctries
            })
            
        })

    }, [])

 

    return state 
}

export default useAxiosNatl