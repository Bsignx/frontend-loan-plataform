import styled, { css } from 'styled-components'
import { Home, Person, Wallet, LogOut } from '@styled-icons/ionicons-outline'

const iconCSS = css`
  width: 1.4rem;
  color: ${props => props.theme.colors.white};
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 6.4rem;

  background-color: ${props => props.theme.colors.primary};

  > svg {
    width: 10rem;
  }

  a {
    font-size: 0.8rem;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.secondary};
      svg {
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
`

export const ProfileContainer = styled.div`
  svg {
    margin-right: 0.4rem;
  }

  > a {
    display: flex;
    align-items: center;
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.4rem;
  }

  > a {
    margin: 0.8rem;
    display: flex;
    align-items: center;
  }
`

export const LogoutIcon = styled(LogOut)`
  ${iconCSS}
`

export const HomeIcon = styled(Home)`
  ${iconCSS}
`
export const WalletIcon = styled(Wallet)`
  ${iconCSS}
`

export const PersonIcon = styled(Person)`
  ${iconCSS}
`
