import React from 'react'
import Link from 'next/link'
import Input from '../../components/Input'
import Logo from '../../assets/logo.svg'

import {
  Container,
  HeaderContainer,
  ArrowLeftIcon,
  LoanText,
  FormContainer,
  AlternativeText,
  Button
} from './styles'

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
        <h2>Registrar-se</h2>
        <form>
          <Input
            name="name"
            type="text"
            label="Nome completo"
            placeholder="Fulano da Silva"
          />
          <Input
            name="birth"
            type="date"
            label="Data de nascimento"
            placeholder="xx/xx/xxxx"
          />
          <Input
            name="cpf"
            type="text"
            label="CPF(Apenas números)"
            placeholder="xxxxxxxxxxx"
          />
          <Input
            name="cell"
            type="text"
            label="Celular(Apenas números)"
            placeholder="xxxxxxxxxxx"
          />
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
          <Input
            name="confirm-password"
            type="password"
            label="Repetir senha"
            placeholder="*************"
          />

          <Link href="/login">
            <Button>
              <p>Cadastrar</p>
            </Button>
          </Link>
          <AlternativeText>
            Já tem cadastro?{' '}
            <Link href="/login">
              <a>Faça o login</a>
            </Link>
          </AlternativeText>
        </form>
      </FormContainer>
    </Container>
  )
}

export default Login
