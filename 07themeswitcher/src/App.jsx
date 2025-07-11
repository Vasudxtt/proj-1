
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider,useTheme } from './context/Theme'

function App() {

const[themeMode,setThemeMode] = useState('Light')

const lightMode=()=>{
  setThemeMode('Light')
}

const darkMode=()=>{
  setThemeMode('Dark')
}

// actual chnage in theme

useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])


  return (
    <ThemeProvider value={{themeMode,darkMode,lightMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

        </div>
{/* theme btn*/ }
        <div className="w-full max-w-sm mx-auto">
{/* theme card*/ }
        </div>
      </div>
    </div>
</ThemeProvider>
  )
}

export default App
