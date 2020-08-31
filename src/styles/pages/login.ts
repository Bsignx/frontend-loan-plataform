import styled from 'styled-components'
import { ArrowBack } from '@styled-icons/ionicons-outline'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem 1.6rem 4rem;
  width: 100vw;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};

  > svg {
    cursor: pointer;
  }

  > div > svg {
    display: none;
  }

  @media (min-width: 720px) {
    padding: 1.6rem 1.6rem 8rem;

    div > svg {
      display: inline-block;
      width: 20rem;
      margin-bottom: 0.4rem;
    }

    div {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-right: 4.2rem;
    }
  }
`

export const ArrowLeftIcon = styled(ArrowBack)`
  width: 2.5rem;
`

export const LoanText = styled.p`
  font-size: 0.8rem;
  margin-left: 0.8rem;
  font-weight: 700;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
  width: 100%;
  position: absolute;
  top: 6rem;

  padding: 2.4rem 1.6rem 1.6rem;
  box-shadow: 0px 10px 22px 2px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;

  > h2 {
    font-size: 1.6rem;
    font-weight: 600;

    color: ${props => props.theme.colors.darkText};
  }

  > form {
    width: 100%;
  }

  @media (min-width: 720px) {
    max-width: 32rem;
    padding: 3.2rem 1.6rem;
    top: 10rem;
  }
`

export const AlternativeText = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
  margin: 0.8rem 0;
  color: ${props => props.theme.colors.darkText};
  > a {
    color: ${props => props.theme.colors.darkText};
  }
`

export const Button = styled.div`
  width: 100%;
  height: 3rem;
  border-radius: 0.4rem;
  text-decoration: none;
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  > p {
    font-size: 1rem;
    font-weight: bold;
    margin-left: 0.4rem;
    text-align: center;
    line-height: 3rem;
  }

  &:hover {
    opacity: 0.7;
  }
`
