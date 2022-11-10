import { useEffect } from "react"
import { useState } from "react"
import MoonIcon from "./icons/IconMoon"
import IconSon from "./icons/IconSon"

const Header = () => { 

    const initialStateDarMode = () =>  localStorage.getItem("theme") == "dark"
    const [darkMode, setDarkMode] = useState(initialStateDarMode)

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    },[darkMode])
    
    return( 
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className='text-3xl font-semibold uppercase text-white dark:text-fuchsia-600 tracking-[0.3em]'> Todo </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    { darkMode ? <IconSon /> : <MoonIcon />}
                </button>
            </div>
        </header>   
    )
 }

 export default Header