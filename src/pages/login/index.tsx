import React from 'react'
import Input from '../../components/Input'
import Logo from '../../assets/logo.svg'
import Link from 'next/link'

import {
  Container,
  HeaderContainer,
  ArrowLeftIcon,
  LoanText,
  FormContainer,
  AlternativeText,
  Button
} from '../../styles/pages/login'

const Login: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Link href="/">
          <ArrowLeftIcon />
        </Link>
        <div>
          <Logo />
          <LoanText>Busque as melhores oportunidades de empréstimo</LoanText>
        </div>
      </HeaderContainer>

      <FormContainer>
        <h2>Entrar</h2>
        <form>
          <Input
            name="email"
            type="email"
            label="E-mail"
            placeholder="example@email.com"
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            placeholder="*************"
          />
          <AlternativeText>
            Esqueceu a senha?{' '}
            <Link href="/">
              <a>Clique aqui</a>
            </Link>
          </AlternativeText>
          <Link href="/home">
            <Button>
              <p>Entrar</p>
            </Button>
          </Link>
          <AlternativeText>
            Não tem conta?{' '}
            <Link href="/register">
              <a>Faça seu cadastro</a>
            </Link>
          </AlternativeText>
        </form>
      </FormContainer>
    </Container>
  )
}

export default Login
