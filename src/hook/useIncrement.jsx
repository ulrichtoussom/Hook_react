import { useState } from "react"




export const useIncrement = ()=>{

    const[ value , setValue] = useState(0)

    const Increment = () => {

        return value == 10 ? 10 : setValue(v => v+1)
    }

    const Decrement = () => {

        return value == 0 ? 0 : setValue(v => v-1)
    }

    return {result:value, Increment, Decrement}
}