import React from 'react'
import Head from 'next/head'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Loan.prototype - Plataforma de empréstimos</title>
      </Head>

      <h1>Olá</h1>
    </Container>
  )
}

export default Home
