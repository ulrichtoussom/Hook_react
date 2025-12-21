  import { forwardRef, useEffect, useId, useMemo, useRef, useState } from 'react'

  import './App.css'

  function App() {

    

    const [userName, setUserName] = useState('ulrich Toussom')


    const ref = useRef(undefined)
    

    useEffect(()=> {

      console.log(ref)

    },[])

    
    return(

      <div  className='container'>
        <Input ref={ref} inputType='text' value={userName} /* handleChange={setUserName} */ />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt doloremque aperiam quos nemo pariatur fuga, molestiae impedit deleniti quidem dolore mollitia, maxime ut suscipit temporibus atque accusamus, sint nostrum! Quam, est culpa, earum soluta quos laborum libero veniam perspiciatis quas blanditiis rerum. Est earum ex in quis corrupti provident sint neque praesentium omnis ratione beatae inventore, ipsam sit iusto, laboriosam dolor laborum repellat? Sint saepe reprehenderit harum voluptatum iusto provident similique dolore dicta, inventore quasi culpa ipsam labore est commodi quod nisi impedit odio fuga fugit esse assumenda? Qui, minima. Quo repellat natus consequuntur nisi nihil culpa repudiandae, vel totam?
      </div>
    )
  
  }
  export default App


/**
 * @typedef {Object} PropsInput
 * @property {string} inputType 
 * @property {string} value 
 * @property {string} label
 * @property {()=>void} handleChange
 * @property {} inpuRef 
 * 
 * 
 */
/**
 * 
 * @param {PropsInput} props 
 * @returns 
 */


  const Input = forwardRef( function Input(props,ref){

    const id = useId()
    return(
      <div className="container">
        <label htmlFor={id}>{props.label}</label>
        <input 
            ref={ref}
            id={id}
            className='form-control'
            type={props.inputType}
            value={props.value}
            
            />

      </div>
    )
  })


  