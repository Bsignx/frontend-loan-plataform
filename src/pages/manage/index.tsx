import React from 'react'
import Navbar from '../../components/Navbar'
import Select from '../../components/Select'
import ManageCardLoan from '../../components/ManageCardLoan'

import loanImage from '../../assets/loanImage.png'

import {
  Container,
  FilterOrderContainer,
  FilterIcon,
  CardsContainer
} from '../../styles/pages/manage'

const Manage: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <FilterOrderContainer>
        <Select
          name="subject"
          initialName="Ordernar por"
          options={[
            { value: 'Ordernar por', label: 'Ordernar por' },
            { value: 'Option1', label: 'Option1' },
            { value: 'Option2', label: 'Option3' }
          ]}
        />
        <a>
          <FilterIcon />
          <p>Filtrar</p>
        </a>
      </FilterOrderContainer>
      <CardsContainer>
        <ManageCardLoan
          name="Empréstimo pessoal exemplo"
          image={loanImage}
          minimum="1.000.00"
          maximum="50.000.00"
          deadline={[6, 18]}
          rate={3.4}
          approved
        />
        <ManageCardLoan
          name="Empréstimo pessoal exemplo"
          image={loanImage}
          minimum="1.000.00"
          maximum="50.000.00"
          deadline={[6, 18]}
          rate={3.4}
        />
      </CardsContainer>
    </Container>
  )
}

export default Manage
