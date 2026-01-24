import { useState } from "react";
 
import Input from './Input'


export default function Demo(){

    const [inputValue , SetInputValue] = useState('')

    return(
        <Input value={inputValue} handleChange={SetInputValue} />      
    )

}