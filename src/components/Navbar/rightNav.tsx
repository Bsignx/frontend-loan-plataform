import React from 'react'
import styled from 'styled-components'
import {
  ContainerLinks,
  HomeIcon,
  WalletIcon,
  PersonIcon,
  ProfileContainer,
  LogoutIcon
} from './styles'
import Link from 'next/link'

const Container = styled.div<RightNavProps>`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem 0 15%;
  z-index: 19;

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;

    padding: 4rem 2.4rem 0 2.4rem;
    transition: transform 0.3s ease-in-out;
  }
`

export interface RightNavProps {
  open?: boolean
}

const RightNav: React.FC<RightNavProps> = ({ open }) => {
  return (
    <Container open={open}>
      <ContainerLinks>
        <Link href="/home">
          <a>
            <HomeIcon />
            <p>Empréstimos</p>
          </a>
        </Link>
        <Link href="/manage">
          <a>
            <WalletIcon />
            <p> Gerenciar Propostas</p>
          </a>
        </Link>
        <Link href="/profile">
          <a>
            <PersonIcon />
            <p>Meu Perfil</p>
          </a>
        </Link>
      </ContainerLinks>

      <ProfileContainer>
        <Link href="/">
          <a>
            <LogoutIcon />
            <p>Sair</p>
          </a>
        </Link>
      </ProfileContainer>
    </Container>
  )
}

export default RightNav
