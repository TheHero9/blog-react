import React from "react"
import { Button } from "react-bootstrap"
import { FaMoon } from "react-icons/fa"
import { useThemeUpdate } from "./Context/ThemeContext"
import { useTheme } from "./Context/ThemeContext"


export default function ThemeContextComponent(){
    const lightTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    
    const themeStyles = {
        backgroundColor: lightTheme ? 'red' : 'blue',
        color: !lightTheme ? 'red' : 'blue'
    }

    
    return(
        <>
            <Button className="buttonMode" onClick={toggleTheme}><FaMoon/></Button>
            <div style={themeStyles}> 
                <h1>Hello</h1>
            </div>
        </>
    )
}