import { useEffect, useRef } from "react"



/**
 * 
 * @param {string} Title 
 */

export const useDocumentTitle = (Title) => {

    const titleRef = useRef(document.title)

    useEffect(()=>{ 
        const originalTitle = titleRef.current
        return () => {
            document.title = originalTitle
        } 
    },[])

    useEffect(()=>{

        document.title = Title ? `Edit ${Title}` : titleRef.current
    } 
    ,[Title])
    


}