import React, { useState } from 'react'
import Home from './pages/home/Home'
import { ThemeContext } from './context/theme/ThemeContext'

const App = () => {
    const [theme] =useState('light')
    return (
        <ThemeContext.Provider value='light'>
            <Home />
        </ThemeContext.Provider>

    )
}

export default App