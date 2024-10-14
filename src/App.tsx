import React, { useState } from 'react'
import Home from './pages/home/Home' 
import './App.css'
import { ThemeContext } from './context/theme/ThemeContext' 
import Switch from "react-switch";
const App = () => {
    const [theme,setTheme] = useState('light')
    const [checked, setChecked] = useState(false)
    const handleChange = (checked: boolean) => {
        setChecked(checked=>!checked) 
        if(checked){
            setTheme('dark')
        }
        else setTheme('light')
        console.log(checked)
    }
    return (
        <ThemeContext.Provider value={theme}>
            <Switch onChange={handleChange} className='react-switch' checked={checked} />
            <Home />
        </ThemeContext.Provider>

    )
}

export default App