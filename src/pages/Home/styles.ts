import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 70rem;
  height: max-content;
  position: absolute;
  left: 50%;
  margin-left: 3rem;
  font-size: 17px;

  transform: translateX(-50%);

  background-color: ${({ theme }) => theme.white};

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`
export const PersonalCard = styled.div`
  width: 22rem;
  height: 100%;

  padding-top: 3rem;
  padding-left: 3rem;
  padding-bottom: 3rem;
  padding-right: 1rem;

  display: flex;
  flex-direction: column;
  gap: 32px;

  background-color: ${({ theme }) => theme['base-profile']};

  body {
    background-color: ${({ theme }) => theme.white};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 3rem;

    a {
      color: ${({ theme }) => theme['base-text']};
      :hover {
        color: ${({ theme }) => theme['base-violet']};
      }
    }
  }
`

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  margin-left: 1.5rem;

  justify-content: center;

  background-color: ${({ theme }) => theme['base-card']};

  img {
    max-width: 100%;
    max-height: 100%;

    :hover {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
`

export const InfoContainer = styled.section`
  width: 50rem;
  height: 100%;

  padding-top: 3rem;
  padding-left: 1rem;
  padding-bottom: 3rem;
  padding-right: 3rem;

  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: ${({ theme }) => theme['base-profile']};

  font-size: 30px;

  h1 {
    :hover {
      color: ${({ theme }) => theme['base-violet']};
    }
  }
`
