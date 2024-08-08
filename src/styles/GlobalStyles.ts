import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-Archivo: "Archivo", sans-serif;
    --font-Inter: "Inter", sans-serif;
    --font-Roboto: "Roboto", sans-serif;

    font-size: 62.5%;
    
    @media (max-width: 768px) {
          font-size: 52.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.background};
    font-family: var(--font-Inter);
    font-size: 1.6rem;
    color: ${({ theme }) => theme['default-text']};
    
    -webkit-font-smoothing: antialiased;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  /*Remove spinner from number type inputs
  For Webkit browsers (Chrome, Safari, Edge) */
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  //To ensure compatibility with Edge style (based on Chromium)
  input[type='number']::-ms-outer-spin-button,
  input[type='number']::-ms-inner-spin-button {
    display: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    
    @media (max-width: 768px) {
      width: 5px;
      height: 5px;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['scrollbar-thumb']};
    border-radius: 8px;
  }
`
