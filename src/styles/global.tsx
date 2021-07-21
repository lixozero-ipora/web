import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle` 
  :root {
    --color-green: #28a443;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: #ebebeb;
    font-family: Poppins, Arial, Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
  }
  
  button, input, textarea {
    font-family: Poppins, Arial, Helvetica, sans-serif;
  } 

  a {
    text-decoration: none;
  }

  html, body, #root{
    min-height: 100%;
  }
`
