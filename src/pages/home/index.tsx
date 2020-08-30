import React from 'react'
import Navbar from '../../components/Navbar'
import Select from '../../components/Select'

import { Container, FilterOrderContainer, FilterIcon } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <FilterOrderContainer>
        <Select
          name="subject"
          initialName="Ordernar por"
          options={[
            { value: 'Option', label: 'Option' },
            { value: 'Option1', label: 'Option1' },
            { value: 'Option2', label: 'Option3' }
          ]}
        />
        <a>
          <FilterIcon />
          <p>Filtrar</p>
        </a>
      </FilterOrderContainer>
    </Container>
  )
}

export default Home
