import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStyle } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultThemes'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
