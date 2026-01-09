import { useState } from "react"




/**
 * 
 * @param {{base:number, max: , min: }} start 
 * @returns {{compteur:number, Increment:()=> number, Decrement: ()=> number}}
 */

export const useIncrement = ({base=10, max=Infinity, min=-Infinity}) => {

    const [compteur, setCompteur] = useState(base)

    const Increment = () => setCompteur((v) =>  v < max ? v + 1 : v)
    const Decrement = () => setCompteur(v => min < v ? v - 1 : v)

    return {compteur, Increment, Decrement}
}