import styled from 'styled-components'
import { Filter } from '@styled-icons/ionicons-outline'

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
  padding: 0.8rem 1.6rem;
  max-width: 40rem;
  > a {
    display: flex;
    align-items: center;
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

export const FilterIcon = styled(Filter)`
  width: 2rem;
  margin-right: 0.4rem;
  color: ${props => props.theme.colors.secondary};
`
