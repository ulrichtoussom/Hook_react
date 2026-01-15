
  import './App.css'
  import 'bootstrap/dist/css/bootstrap.min.css'
import { useMemo, useState } from 'react'
import { InfoMemo } from './component/Info'
import Demo from './component/Demo'
import Input from './component/Input'
import { useIncrement } from './hook/useIncrement'



  function App() {

    const [inputValue , SetInputValue] = useState('')

    const handleClick = useMemo(()=>{
      return () => {
          console.log(inputValue.length)
      }

    },[inputValue.length])
    
    const {result , Increment, Decrement} = useIncrement()

      return(
        <div className="container ">

            <Input value={inputValue} handleChange={SetInputValue} />  
            <InfoMemo click={handleClick} />
            <div className='d-flex gap-2'>
              <button className='btn btn-success' type="button" onClick={Increment}>Incrementer</button>
              <button className='btn btn-danger' type="button" onClick={Decrement}>Decrementer</button>
              <span className='align-self-center fs-4'>{result}</span>
            </div>
            


          
        </div>
      )
  }

  export default App


