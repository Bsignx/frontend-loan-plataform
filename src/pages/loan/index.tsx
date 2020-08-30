import React from 'react'
import Navbar from '../../components/Navbar'
import CardLoan from '../../components/CardLoan'

import loanImage from '../../assets/loanImage.png'

import {
  Container,
  FilterOrderContainer,
  BackIcon,
  CardsContainer
} from './styles'
import Link from 'next/link'

const Loan: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <FilterOrderContainer>
        <Link href="/home">
          <a>
            <BackIcon />
            <p>Voltar</p>
          </a>
        </Link>
      </FilterOrderContainer>
      <CardsContainer>
        <CardLoan
          loan
          name="Empréstimo pessoal exemplo"
          image={loanImage}
          minimum="1.000.00"
          maximum="50.000.00"
          deadline={[6, 18]}
          rate={3.4}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed gravida elit euismod. Sodales gravida pellentesque nunc, porttitor sit a. Ac nulla et, lectus sit sit. Nibh scelerisque morbi sagittis suscipit aliquet lacus."
        />
      </CardsContainer>
    </Container>
  )
}

export default Loan
