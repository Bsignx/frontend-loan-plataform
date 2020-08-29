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
  RegisterIcon,
  CallText,
  MainContainer
} from './styles'

const Landing: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Sua plataforma de empréstimos - Loan.prototype </title>
      </Head>

      <HeaderContainer>
        <div>
          <Logo />
          <CallText>
            Sua plataforma
            <br /> de empréstimos
          </CallText>
        </div>
        <Background />
      </HeaderContainer>

      <MainContainer>
        <MainText>
          Seja bem-vindo.
          <br /> <strong>O que deseja fazer?</strong>
        </MainText>

        <ButtonsContainer>
          <Button href="/login">
            <LoginIcon />
            <p>Entrar</p>
          </Button>
          <Button className="secondary-button" href="/register">
            <RegisterIcon />
            <p>Registrar</p>
          </Button>
        </ButtonsContainer>
      </MainContainer>
    </Container>
  )
}

export default Landing