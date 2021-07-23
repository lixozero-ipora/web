import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle` 
  :root {
    font-size: 62.5%;

    --color-red: #ef233c;
    --color-green: #28a443;
    --color-text-dark: #4f4e4e;
    --color-blue-light: #73D5FF;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    font-size: 1.6rem;
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
    font-weight: bold;
    color: inherit;
    text-decoration: none;
  }

  html, body, #root{
    min-height: 100%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #166026;
    border-radius: 5px;
  }
`
