import React from 'react'
import ImageLoan from '../../assets/loanImage.png'

import {
  Container,
  InfoContainer,
  Image,
  ContainerImage,
  MainText,
  DetailContainer,
  ContainerSub,
  MoneyIcon,
  ClockIcon,
  RateIcon,
  Button,
  FeaturesContainer,
  DualContainer
} from './styles'
import Link from 'next/link'

interface CardLoanProps {
  name: string
  image: any
  minimum: string
  maximum: string
  deadline: Array<number>
  rate: number
  description: string
}

const CardLoan: React.FC<CardLoanProps> = ({
  name,
  image,
  minimum,
  maximum,
  deadline,
  rate,
  description
}) => {
  return (
    <Container>
      <ContainerImage>
        <Image src={image} />
      </ContainerImage>

      <InfoContainer>
        <MainText>{name}</MainText>
        <FeaturesContainer>
          <DualContainer>
            <DetailContainer>
              <p>R$ {minimum}</p>
              <ContainerSub>
                <MoneyIcon />
                <p>Valor mínimo</p>
              </ContainerSub>
            </DetailContainer>
            <DetailContainer>
              <p>R$ {maximum}</p>
              <ContainerSub>
                <MoneyIcon />
                <p>Valor máximo</p>
              </ContainerSub>
            </DetailContainer>
          </DualContainer>
          <DualContainer>
            <DetailContainer>
              <p>
                {deadline[0]} à {deadline[1]} meses
              </p>
              <ContainerSub>
                <ClockIcon />
                <p>Prazo</p>
              </ContainerSub>
            </DetailContainer>
            <DetailContainer>
              <p>{rate}% a.m</p>
              <ContainerSub>
                <RateIcon />
                <p>Taxa de Juros</p>
              </ContainerSub>
            </DetailContainer>
          </DualContainer>
        </FeaturesContainer>

        <Link href="/card-detail">
          <Button>
            <p>Ver esta opção</p>
          </Button>
        </Link>
      </InfoContainer>
    </Container>
  )
}

export default CardLoan
