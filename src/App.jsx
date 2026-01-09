import { useIncrement } from "./hook/useIncrement"
import { useToggle } from "./hook/useToggle"
import Input from "./component/Input"
import { useFetch } from "./hook/useFetch"

  

  
  function App() {


    const [checked, setChecked] = useToggle()
    const {compteur, Decrement, Increment} = useIncrement({base:0 , max:10, min:1 })
    
    const{loading, data, errors} =  useFetch('https://jsonplaceholder.typicode.com/posts?_delay=2000')

    

    
    
    
    return(

      <div  className='container'>

          <input className="form-check-input" type="checkbox" checked={checked} 
            name="" id="" 
            onChange={setChecked}
            />
            <div className="my-3">
              <button className="btn btn-success" onClick={Increment}>Incrementer</button>
      
              <button className="btn btn-danger" onClick={()=> Decrement()}>Decrementer</button>
              <div> <label className="form-label" htmlFor="">{compteur}</label></div>
            </div>

            <div>
              {checked &&  <Input />}
            </div>

            <div>

              {loading && <div> Chargement ...</div>}
              {data  && <div> {data} </div>}
              {errors  && <div> {errors} </div>}


            </div>

           <div>
           </div>

            
        
      </div>
    )
  
  }
  export default App




 

  