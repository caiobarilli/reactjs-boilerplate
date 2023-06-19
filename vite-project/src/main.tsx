import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import Button from './components/Button'

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    console.log(theme)
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme))
  }

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleTheme}>Alterar tema</Button>
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
