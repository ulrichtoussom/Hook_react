import { useEffect, useState } from "react"



/**
 * 
 * @param {string} url 
 * @param {FetchEventInit} options 
 * @returns {Promise<{loading:boolean, data:[], error:Error}>}
 */
 export const useFetch =  function(url,options={}){

    const [loading , setLoading] = useState(true)
    const [data , setData] = useState([])
    const [errors , setErrors] = useState(null)

    

    useEffect(()=>{

        
        fetch(url,{
            ...options,
            headers:{
                'Accept': 'application/json; charset=UTF-8',
                ...options?.headers
            }
        }).then( res => {
            setData(res.text())
        }).catch((e)=>{
            setErrors(e)

        }).finally(()=>{
            setLoading(false)
        })
    },[url,options])



    return {loading, data, errors}
    
}