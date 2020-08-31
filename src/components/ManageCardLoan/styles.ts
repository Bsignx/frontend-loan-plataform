import styled, { css } from 'styled-components'
import { MoneyCheckAlt, Percentage } from '@styled-icons/fa-solid'
import { Clock } from '@styled-icons/fa-regular'
import { Hourglass } from '@styled-icons/ionicons-outline'
import { CheckSquare } from '@styled-icons/boxicons-regular'

const iconCSS = css`
  color: ${props => props.theme.colors.normalText};
`

export const Container = styled.div`
  box-shadow: 0px 10px 22px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  padding: 0.8rem 0.4rem;

  @media (min-width: 720px) {
    max-width: 40rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  .analize {
    background-color: ${props => props.theme.colors.danger};
  }
`

export const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div + div {
    margin-right: 0.4rem;
  }
  @media (min-width: 720px) {
    flex-wrap: nowrap;
  }
`

export const DualContainer = styled.div`
  display: flex;
  flex-direction: column;
  & + div {
    margin-left: 0.8rem;
  }
  @media (min-width: 720px) {
    flex-direction: row;
  }
`

export const ContainerImage = styled.div`
  width: 5rem;
  height: 5rem;
  margin-right: 0.8rem;
  flex-shrink: 0;
  @media (min-width: 720px) {
    width: 9rem;
    height: 9rem;
  }
`

export const Image = styled.img`
  width: 100%;
`

export const MainText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: ${props => props.theme.colors.darkText};
  @media (min-width: 720px) {
    font-size: 1.2rem;
  }
`

export const DescribeText = styled.p`
  font-size: 0.7rem;
  margin-bottom: 0.4rem;
  max-width: 26rem;
`

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  & + div {
    margin-top: 0.4rem;
  }
  & > p:first-child {
    color: ${props => props.theme.colors.darkText};
  }
  @media (min-width: 720px) {
    & > p:first-child {
      margin-bottom: 0.4rem;
    }
    & + div {
      margin-top: 0;
      margin-left: 1.4rem;
    }
    font-size: 0.7rem;
  }
`

export const ContainerSub = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 0.4rem;
  }
`

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;
  > div:first-child {
    margin-right: 1.6rem;
  }
  @media (min-width: 720px) {
    > div {
      margin-top: 2.5rem;
    }
    font-size: 0.8rem;
  }
`

export const MoneyIcon = styled(MoneyCheckAlt)`
  ${iconCSS};
  width: 1.2rem;
`

export const ClockIcon = styled(Clock)`
  ${iconCSS};
  width: 1rem;
`

export const RateIcon = styled(Percentage)`
  ${iconCSS};
  width: 0.8rem;
`

export const HourglassIcon = styled(Hourglass)`
  color: ${props => props.theme.colors.analize};
  width: 1.2rem;
`

export const CheckIcon = styled(CheckSquare)`
  color: ${props => props.theme.colors.secondary};
  width: 1.2rem;
`

export const Button = styled.button`
  cursor: pointer;
  height: 2rem;
  width: 6rem;
  border: none;
  border-radius: 0.2rem;
  background-color: ${props => props.theme.colors.secondary};
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  text-align: center;
  line-height: 2rem;
  margin-top: 0.4rem;
  margin-right: 0.4rem;
  align-self: flex-end;
  justify-self: flex-end;

  &:hover {
    opacity: 0.7;
  }
  @media (min-width: 720px) {
    height: 2rem;
    width: 8rem;
    line-height: 2rem;
    font-size: 0.7rem;
    margin-top: 2.5rem;
  }
`
