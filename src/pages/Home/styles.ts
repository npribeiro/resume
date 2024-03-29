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

  @media screen and (max-width: 440px) {
    width: max-content;
    height: max-content;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    left: 47%;
    display: inline-block;
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
  position: relative;

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
    @media screen and (max-width: 440px) {
      gap: 0.1rem;
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 440px) {
    padding-top: 3rem;
    padding-left: 2rem;
    padding-bottom: 3rem;
    padding-right: 2rem;
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

  @media screen and (max-width: 440px) {
    align-items: center;
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
  position: relative;
  flex-direction: column;
  gap: 32px;
  background-color: ${({ theme }) => theme['base-profile']};

  font-size: 30px;

  h1 {
    font-size: 42px;
    :hover {
      color: ${({ theme }) => theme['base-violet']};
    }
  }

  @media screen and (max-width: 440px) {
    display: inline-block;
    width: 20rem;

    padding-top: 3rem;
    padding-left: 2rem;
    padding-bottom: 3rem;
    padding-right: 2rem;

    h1 {
      font-size: 30px;
      text-align: center;
    }
  }
`

export const Divider = styled.div`
  border-left: 2px solid black;
  height: 75rem;
  margin: 3rem 1rem 3rem 1rem;
  display: flex;
  position: relative;

  @media screen and (max-width: 440px) {
    display: flex;
    position: relative;
    border-left: 0px solid black;
    border-bottom: 2px solid black;
    height: 1px;
    width: 300px;
    margin: 2rem 2rem 2rem 2rem;
  }
`
