import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > label {
    color: ${props => props.theme.colors.darkText};
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0.8rem 0 0.2rem;
  }

  > input {
    height: 3rem;
    width: 100%;
    border: none;
    border-radius: 0.4rem;
    background-color: ${props => props.theme.colors.input};
    opacity: 0.5;
    color: ${props => props.theme.colors.darkText};
    padding: 0.4rem;

    &::placeholder {
      color: ${props => props.theme.colors.terciary};
    }
  }
`
