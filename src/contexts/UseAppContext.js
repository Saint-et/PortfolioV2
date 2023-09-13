import { createContext, useContext, useEffect, useState } from "react";




export const AppContext = createContext(null);


export const AppProvider = ({children}) => {

      // Theme
  const [localTheme, setLocalTheme] = useState('')
  const [fullScreenData, setFullScreenData] = useState(null)

    let root = document.querySelector(":root")


  useEffect(() => {
    setLocalTheme(localStorage.getItem('theme'))
    root.setAttribute('data-theme', localStorage.getItem('theme'))
  }, []);
  
  const handleTheme = (checked) => {
    if (checked === true) {
      localStorage.setItem('theme', 'default');
      setLocalTheme(localStorage.getItem('theme'))
      root.setAttribute('data-theme', localStorage.getItem('theme'))
    } else {
      localStorage.setItem('theme', 'light');
      setLocalTheme(localStorage.getItem('theme'))
      root.setAttribute('data-theme', localStorage.getItem('theme'))
    }
  }
  return (
    <AppContext.Provider value={{ localTheme, setFullScreenData, fullScreenData, handleTheme }}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)