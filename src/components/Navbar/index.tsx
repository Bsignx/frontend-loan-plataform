import React from 'react'

import Logo from '../../assets/logo.svg'

import { Container } from './styles'
import Burger from './burguer'

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Burger />
    </Container>
  )
}

export default Navbar
