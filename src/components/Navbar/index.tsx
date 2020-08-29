import React from 'react'

import Logo from '../../assets/logo.svg'

import {
  Container,
  ProfileContainer,
  LogoutIcon,
  ContainerLinks,
  HomeIcon,
  WalletIcon,
  PersonIcon
} from './styles'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo />
      <ContainerLinks>
        <Link href="/">
          <a>
            <HomeIcon />
            <p>Empréstimos</p>
          </a>
        </Link>
        <Link href="/">
          <a>
            <WalletIcon />
            <p> Gerenciar Propostas</p>
          </a>
        </Link>
        <Link href="/">
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

export default Navbar
