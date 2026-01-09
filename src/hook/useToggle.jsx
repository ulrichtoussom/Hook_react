import { useState } from "react"




/**
 * Prend a paramettre un boolean et renvoie son inverse 
 * 
 * @param {boolean} initial 
 * @returns {[boolean, ()=> boolean]} 
 * 
 */
export  const  useToggle = (initial=true) => {

    const [state, setState] = useState(initial)
    const toggle = () => setState( v => !v)

    return[state, toggle]
}