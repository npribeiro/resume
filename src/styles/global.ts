import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme['base-violet']};
  }

  body {
    background-color: ${({ theme }) => theme.background};
    font-family: 'Mulish', sans-serif;
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;

    
  }

 

  input, textarea, button {
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Mulish', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
    
    :hover {
      color: ${({ theme }) => theme['base-violet']};
    }

    :link {
      color: ${({ theme }) => theme['base-title']};
    }

    
    
  }
`
