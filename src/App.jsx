  import { useEffect, useState } from 'react'

  import './App.css'

  function App() {

    const [isShow, setIsShow] = useState(true)
    const [startPoint,  setStartPoint] = useState(5)
    const [showDecompt, setShowDecompt] = useState(startPoint)

    const handleChange = (e) => {
      setStartPoint(e.target.value)
      setShowDecompt(e.target.value)
    }
    
    console.log('render')

    useEffect(()=> {

      const timer = setInterval(()=>{
          console.log('still turn')
          setShowDecompt( v => {
            if(v <= 1 ){
              clearInterval(timer)
              return 0
            }
            return v-1

          })

        },1000)

      return () => {
        clearInterval(timer)
      }

    },[startPoint])

    return (
       <div className='container'>
          <div className="form-check">
              <input className='form-check-input' type="checkbox" name="" id="showEdit" checked={isShow} onChange={(e)=> setIsShow(e.target.checked)} />
              <label className='form-check-label' htmlFor="showEdit"> Masquer L'edition </label>
         </div>
          <div style={{height: '300vh'}}> 
            <div className="mb-3 my-3" >
                  <input 
                      type="text" value={startPoint} className="form-control" id="exampleFormControlInput1" 
                      placeholder="name@example.com"
                      onChange={handleChange}   
                  />
                  <div>
                    
                  </div>
                  <span style={{
                          border: '1px solid green',
                          display:'inline-block',
                          margin: '5px',
                          padding : '20px'
                  }}>

                    decompte : { showDecompt}
                  </span>
            </div>
          </div>
       </div>
    )


  }

  export default App


