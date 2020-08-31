import React from 'react'

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
  DualContainer,
  DescribeText,
  StatusContainer,
  HourglassIcon,
  CheckIcon
} from './styles'
import Link from 'next/link'

interface ManageCardLoanProps {
  name: string
  image: any
  minimum: string
  maximum: string
  deadline: Array<number>
  rate: number
  description?: string
  approved?: boolean
}

const ManageCardLoan: React.FC<ManageCardLoanProps> = ({
  name,
  image,
  minimum,
  maximum,
  deadline,
  rate,
  description,
  approved
}) => {
  return (
    <Container>
      <ContainerImage>
        <Image src={image} />
      </ContainerImage>

      <InfoContainer>
        <MainText>{name}</MainText>
        {description && <DescribeText>{description}</DescribeText>}
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
        <StatusContainer>
          {approved ? (
            <ContainerSub>
              <CheckIcon />
              <p>Aprovado</p>
            </ContainerSub>
          ) : (
            <ContainerSub>
              <HourglassIcon />
              <p>Em análise</p>
            </ContainerSub>
          )}
          {approved ? (
            <Link href="/home">
              <Button disabled>
                <p>Aprovado</p>{' '}
              </Button>
            </Link>
          ) : (
            <Link href="/loan">
              <Button className="analize">
                {' '}
                <p>Cancelar</p>
              </Button>
            </Link>
          )}
        </StatusContainer>
      </InfoContainer>
    </Container>
  )
}

export default ManageCardLoan
