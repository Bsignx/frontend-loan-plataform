import styled from 'styled-components'
import { ArrowBack } from '@styled-icons/ionicons-outline'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FilterOrderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: space-between;
  padding: 1.4rem 1.4rem 0;
  max-width: 40rem;
  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.normalText};
    cursor: pointer;
    > p {
      font-size: 1rem;
      font-weight: 600;
    }
  }
`

export const CardsContainer = styled.div`
  padding: 0.8rem 1.6rem;
`

export const BackIcon = styled(ArrowBack)`
  width: 1.6rem;
  margin-right: 0.4rem;
  color: ${props => props.theme.colors.secondary};
`
