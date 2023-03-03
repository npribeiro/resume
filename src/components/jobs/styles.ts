import styled from 'styled-components'

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 22px;
    :hover {
      color: ${({ theme }) => theme['base-violet']};
    }
  }

  h2 {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 18px;
    :hover {
      color: ${({ theme }) => theme['base-violet']};
    }
  }

  p {
    font-size: 16px;
    margin-left: 1rem;
    
  }

  button {
    font-size: 22px;
    width: 1rem;

    display: flex;
    position: relative;
    justify-content: center;

    width: fit-content;

    font-size: 22px;

    background-color: transparent;

    :hover {
      color: ${({ theme }) => theme['base-violet']};
    }
  }
`
