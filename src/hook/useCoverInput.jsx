import { useState } from "react"




export const useCoverInput = ()=>{

    const [ inputValue , setInputValue ] = useState('')
    const toggleChange = (e) => {
        setInputValue(e.target.value)
    }

    return [inputValue, toggleChange]
}