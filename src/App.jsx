

import 'bootstrap/dist/css/bootstrap.min.css'
import Section from './component/Section'

import {ThemeContextProvider, useTheme } from './hook/useTheme'
import Other from './component/Other'
import { Children } from 'react'
import { useContext } from 'react'

export default function App() {


  // console.log('App' , theme)

  return(

    <>
        <Other />

        <ThemeContextProvider>

            <SwitcherTheme />
            <div className='container alert alert-danger'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus commodi exercitationem, labore harum minima perferendis molestiae, nihil nisi vel voluptatibus nulla delectus, non magni consequatur et consectetur. In ex, sit commodi distinctio, laudantium suscipit vel voluptatem laborum quas cupiditate animi, impedit modi quia nesciunt quo voluptatibus repellendus qui. Quia, illum. Voluptatum nesciunt suscipit officiis esse pariatur quam, maxime corporis, obcaecati ipsa commodi ab dicta, sint voluptatem est corrupti optio repudiandae dolorem harum assumenda doloribus ipsum? Magnam incidunt illum repudiandae maxime veniam et placeat, quod quae, ex maiores facere nobis itaque reiciendis ut dolores eum cum sit inventore explicabo sapiente.

                <Section />
              
            </div>

        </ThemeContextProvider>
    </>

    
    
  )
}

function SwitcherTheme(){

  const {toggleTheme, theme} = useTheme()

  return(
    <div>
       <button className='btn btn-warning' type="button" onClick={toggleTheme}>ToggleTheme</button>
       <span> {theme} </span>
    </div>
  )
}