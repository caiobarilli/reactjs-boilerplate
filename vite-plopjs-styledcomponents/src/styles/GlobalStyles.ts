// GlobalStyles.ts
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* Resets para componentes específicos */
  button, input, select, textarea {
    margin: 0;
    padding: 0;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    appearance: none;
    -webkit-appearance: none;
  }

  /* Estilo global */
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`

export default GlobalStyles
