import React from 'react'
import Head from 'next/head'

import Logo from '../../assets/logo.svg'
import Background from '../../assets/home-background.svg'

import {
  Container,
  HeaderContainer,
  ButtonsContainer,
  MainText,
  Button,
  LoginIcon,
  RegisterIcon
} from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home - Loan.prototype </title>
      </Head>

      <HeaderContainer>
        <Logo />
        <Background />
      </HeaderContainer>

      <MainText>
        Seja bem-vindo. <strong>O que deseja fazer?</strong>
      </MainText>

      <ButtonsContainer>
        <Button>
          <LoginIcon />
          <p>Entrar</p>
        </Button>
        <Button>
          <RegisterIcon />
          <p>Registrar</p>
        </Button>
      </ButtonsContainer>
    </Container>
  )
}

export default Home
