// import { themContext } from "../hook/useContext"

import { useTheme } from "../hook/useTheme"







function AddButton() {

    const {theme}= useTheme()
    return(
        <button type="button" className="btn btn-primary"> {theme} </button>
    )
}

export default AddButton