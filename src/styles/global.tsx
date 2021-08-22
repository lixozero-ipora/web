import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle` 
  :root {
    font-size: 62.5%;

    --color-orange: #e85d04;
    --color-green: #00a85a;
    --color-text-dark: #4f4e4e;
    --color-gray-dark: #9e9e9e;
    --color-blue-light: #73D5FF;
    --color-blue-opaque: #1682af;
    --color-blue-dark: #3E4095;
    --color-blue-darker: #171738;

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
  
  button, input, textarea, select {
    font-family: Poppins, Arial, Helvetica, sans-serif;
  } 

  a {
    font-weight: bold;
    color: inherit;
    text-decoration: none;
  }

  p {
    text-align: justify;
  }

  @media(max-width: 552px) {
    :root {
      font-size: 55%;
    }
  }

  html, body, #root{
    min-height: 100%;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-green);
    border-radius: 5px;
  }
`
