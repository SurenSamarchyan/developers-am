import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    
    font-family: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    word-break: break-word;
  }
  
  .opacity-block {
    position: relative;
    * {
      position: relative;
      z-index: 1;
    }
    &::before {
      content: "";
      
      position: absolute;
      z-index: 0;
      
      top: 6px;
      bottom: 6px;
      left: -8px;
      right:-8px;
      
      border-radius: 8px;
      
      background-color: #ffffff87;
      box-shadow: -4px 7px 20px 0 #0000004a;
    }
  }
`