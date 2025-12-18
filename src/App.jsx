  import { useMemo, useState } from 'react'

  import './App.css'

  function App() {

   "use no memo";

    const [userName,  setUserName] = useState('')
    const [password, setPassword] = useState('')

    const security = useMemo(()=> {

      const startTime = performance.now()
      while(performance.now()-startTime <200)
  
        if(password.length <= 4){
          return {text : 'Faible' , color: 'red'}
        }else if( password.length <= 8){
          return {text : 'Moyen' , color: 'orange'}
        }
        return{text : 'Fort' , color: 'green'}
    }, [password])

    

    /**
     * 
     * @param {string} word 
     */
    
   function getForcePassword(word){

    const startTime = performance.now()
    while(performance.now()-startTime <200)

      if(word.length <= 4){
        return {text : 'Faible' , color: 'red'}
      }else if( word.length <= 8){
        return {text : 'Moyen' , color: 'orange'}
      }
      return{text : 'Fort' , color: 'green'}
   }  

      


    return(

      <div className='container my-3'>
        <form action="">

          <Input inputType='text'  value={userName}    handleChange={setUserName} label='User Name :'  />
          <Input inputType='password'  value={password}    handleChange={setPassword} label='Password :' />
          <label  className='form-text' htmlFor=""> Strengh password : <span translate='no' style={{color:security.color}}> {security.text}</span> </label>

        </form>
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
 * 
 * 
 */
/**
 * 
 * @param {PropsInput} param0 
 * @returns 
 */
  const Input = function({inputType,value,label,handleChange}){


    

    return (
      
        <div className='mb-3'>

          <label className='form-label' htmlFor="">{label}</label>

          <input 
              type={inputType} value={value} 
              className='form-control'
              onChange={(e)=> handleChange(e.target.value)}
              />

        </div>

      
     
    )
  }

