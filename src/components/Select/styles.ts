import styled from 'styled-components'

export const SelectElement = styled.select`
  outline: none;
  height: 3rem;
  width: 8rem;
  border: none;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.colors.secondary};
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  padding: 0.8rem;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgB7ZFhCYAwEIXPBq6BEYygDWxgBRtoAyvYwAhWsIEG2FgEfacTRNBtgj+EffAY7N49jjuiQOCHaK0TKWXh4lNKNXhjm5dg7GBcoPYhMIUm47MOsE0ADaaBG5NLvdQ7XK/IBzQ0p+DU/NWnv+yuN7IE8yQ1xHsbIQ6foVwIMdNbzDqO/fVOh/EIth8kEPiGFSJQf1/1SwDSAAAAAElFTkSuQmCC')
    no-repeat right ${props => props.theme.colors.secondary};
  -webkit-appearance: none;
  background-position-x: 100px;
  &::placeholder {
    color: ${props => props.theme.colors.terciary};
  }
`
