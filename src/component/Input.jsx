import { useCoverInput } from "../hook/useCoverInput"
import { useDocumentTitle } from "../hook/useDocumentTitle"




export default function Input() {

    const [name, setName] = useCoverInput()

    useDocumentTitle(name ? name : null)


    return(
        <input type="text" className="form-control" value={name} onChange={(e)=>setName(e)} name="" id="" />
    )
}