

/**
 * 
 * @typedef {Object} PropsInput
 * @property {string} value
 * @property {() => string } handleChange
 */


/**
 * 
 * @param {PropsInput} param0 
 * @returns 
 */




function Input({value, handleChange}) {

    return (

        <div className="">
            <input 
                className="form-control form-input-check mt-4 mb-1"
                type="text"
                value = {value}
                onChange={ (e) => handleChange(e.target.value)}
            />
            <label htmlFor="" className="mb-4">{value}</label>
        </div>
    )
}

export default Input 