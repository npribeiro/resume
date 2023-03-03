import styled from 'styled-components'

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
  }

  p {
    font-size: 18px;
    margin-left: 1rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    
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

export const BarPort = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 50%;
  background-color: #b596e5;
  margin-left: 0.8rem;

  :hover {
    color: ${({ theme }) => theme.white};
  }
`

export const BarIngles = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 40%;
  background-color: #b596e5;
  margin-left: 3rem;
`

export const BarFranc = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 8%;
  background-color: #b596e5;
  margin-left: 2rem;
`
