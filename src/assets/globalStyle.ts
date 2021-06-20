import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    // this turns REM into 10px
    // so 2rem its 20px 
    font-size: 62.5%;

    // Global css vars here
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

  input, textarea, button {
    font-size: inherit;
  }
`
