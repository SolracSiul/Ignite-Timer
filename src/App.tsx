import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GLobalStyle } from "./@Types/global"
import { Router } from "./Router"
import {BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GLobalStyle/>
    </ThemeProvider>
  )
}

export default App
