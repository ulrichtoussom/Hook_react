import { useContext } from "react";
import { Children, createContext, useState } from "react";



const ThemeContext = createContext({
    theme : 'dark',
    toggleTheme : () => {}
})




export function  ThemeContextProvider({children}){

    const [theme, setTheme] = useState('ligth')

    function toggleTheme(){
        setTheme(theme === 'ligth' ? 'dark' : 'ligth')
    }

    console.log('ThemeContextProvider', theme)
    return( 
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}




export function useTheme() {

    const {theme, toggleTheme}= useContext(ThemeContext)

    return( {
        isLigth : theme === 'ligth',
        isDark : theme === 'dark',
        theme,
        toggleTheme

    })
}