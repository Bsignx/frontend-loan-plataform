import React from 'react'
import Link from 'next/link'
import Input from '../../components/Input'
import Navbar from '../../components/Navbar'
import profileImage from '../../assets/profile.jpg'

import {
  Container,
  FormContainer,
  Button,
  ProfileHeaderContainer,
  ProfileImage,
  ImageContainer,
  ResponsiveContainer
} from '../../styles/pages/profile'

const Profile: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <ResponsiveContainer>
        <ProfileHeaderContainer>
          <ImageContainer>
            <ProfileImage src={profileImage} />
          </ImageContainer>
          <Link href="/login">
            <Button className="avatar-btn">
              <p>+ Atualizar imagem</p>
            </Button>
          </Link>
        </ProfileHeaderContainer>
        <FormContainer>
          <h2>Informações pessoais</h2>
          <form>
            <Input
              name="name"
              type="text"
              label="Nome completo"
              placeholder="Fulano da Silva"
              value="Bruno Cunha Mariano"
              disabled
            />
            <Input
              name="birth"
              type="text"
              label="Data de nascimento"
              placeholder="xx/xx/xxxx"
              value="20/01/1998"
              disabled
            />
            <Input
              name="cpf"
              type="text"
              label="CPF(Apenas números)"
              placeholder="xxxxxxxxxxx"
              value="138.231.196-64"
              disabled
            />
            <Input
              name="cell"
              type="text"
              label="Celular(Apenas números)"
              placeholder="xxxxxxxxxxx"
              value="34999472635"
              disabled
            />
            <Input
              name="email"
              type="email"
              label="E-mail"
              placeholder="example@email.com"
              value="bsignx@gmail.com"
              disabled
            />

            <Link href="/login">
              <Button>
                <p>Atualizar informações</p>
              </Button>
            </Link>
          </form>
        </FormContainer>
      </ResponsiveContainer>
    </Container>
  )
}

export default Profile
