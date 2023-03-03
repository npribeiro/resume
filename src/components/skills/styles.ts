import styled from 'styled-components'

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    width: fit-content;
    margin-top: 3rem;
    font-size: 22px;

    :hover {
      color: ${({ theme }) => theme['base-violet']};
    }
  }

  button {
    width: 1rem;

    display: flex;
    position: relative;
    justify-content: center;

    width: fit-content;
    margin-top: 3rem;
    font-size: 22px;

    background-color: transparent;

    :hover {
      color: ${({ theme }) => theme['base-violet']};
    }
  }

  p {
    font-size: 18px;
    margin-left: 0.8rem;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    
  }
`
