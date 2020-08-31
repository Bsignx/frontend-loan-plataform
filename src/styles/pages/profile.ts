import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.6rem;
  @media (min-width: 720px) {
    flex-direction: row;
    align-items: flex-start;
    > div + div {
      margin-left: 1.6rem;
    }
  }
`

export const ProfileHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
  width: 100%;
  margin-top: 0.8rem;
  padding: 1.6rem;
  box-shadow: 0px 10px 22px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  .avatar-btn {
    background-color: ${props => props.theme.colors.secondary};
  }
  @media (min-width: 720px) {
    .avatar-btn > p {
      font-size: 0.8rem;
    }
  }
`

export const ProfileImage = styled.img`
  width: 100%;
  border-radius: 50%;
`

export const ImageContainer = styled.div`
  max-width: 10rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
  width: 100%;
  margin-top: 0.8rem;
  padding: 2.4rem 1.6rem 1.6rem;
  box-shadow: 0px 10px 22px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  > h2 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
    color: ${props => props.theme.colors.darkText};
  }

  > form {
    width: 100%;
  }

  @media (min-width: 720px) {
    max-width: 32rem;
    min-width: 30rem;
    padding: 3.2rem 1.6rem;
    top: 10rem;
  }
`

export const AlternativeText = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
  margin: 0.8rem 0;
  color: ${props => props.theme.colors.darkText};
  > a {
    color: ${props => props.theme.colors.darkText};
  }
`

export const Button = styled.div`
  width: 100%;
  height: 3rem;
  cursor: pointer;
  margin-top: 0.8rem;
  border-radius: 0.4rem;
  text-decoration: none;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  > p {
    font-size: 1rem;
    font-weight: bold;
    margin-left: 0.4rem;
    text-align: center;
    line-height: 3rem;
  }

  &:hover {
    opacity: 0.7;
  }
`
