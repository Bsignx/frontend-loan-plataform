import styled from 'styled-components'
import { LogIn, Create } from '@styled-icons/ionicons-outline'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  padding-top: 3.2rem;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  > div > svg {
    width: 15rem;
  }

  > div + svg {
    width: 20rem;
    height: 16rem;
  }

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: center;
    padding: 3.2rem;

    > div + svg {
      width: 40rem;
      height: 20rem;
      margin-bottom: 3.2rem;
    }
  }
`

export const CallText = styled.p`
  font-size: 2.4rem;
  display: none;
  color: ${props => props.theme.colors.white};

  @media (min-width: 720px) {
    display: inline;
  }
`

export const MainContainer = styled.div`
  width: 100%;

  @media (min-width: 720px) {
    display: flex;
    justify-content: space-between;
    padding: 3.2rem 6.4rem 0;
  }
`

export const MainText = styled.p`
  font-size: 1.6rem;
  margin: 1.6rem;
  color: ${props => props.theme.colors.darkText};
`

export const ButtonsContainer = styled.div`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 720px) {
  }
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10rem;
  height: 4rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  & + a {
    margin-left: 0.8rem;
  }

  > p {
    font-size: 1rem;
    font-weight: bold;
    margin-left: 0.4rem;
  }

  & ~ .secondary-button {
    background-color: ${props => props.theme.colors.secondary};
  }

  &:hover {
    opacity: 0.7;
  }
`

export const LoginIcon = styled(LogIn)`
  width: 2rem;
`

export const RegisterIcon = styled(Create)`
  width: 2rem;
`
