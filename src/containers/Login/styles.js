import styled from 'styled-components'

import Fundo from '../../assets/background.svg'
import LoginImg from '../../assets/login-image-mobile.svg'

export const Container = styled.div`
  height: 100dvh;
  width: 100%;
  background: url('${Fundo}');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const LoginImage = styled.img`
  height: 80%;

  @media (max-width: 994px) {
    display: none;
  }
`

export const ContainerItens = styled.div`
  background: black;
  border-radius: 0 10px 10px 0;
  height: 80%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 994px) {
    background: url('${LoginImg}');
    background-size: cover;
    height: 80dvh;
    width: 95%;
    padding: 25px 25px;
  }

  h1 {
    margin-top: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 20%;
    @media (max-width: 994px) {
      height: 100%;
    }
  }
`
export const Label = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 3px;
  color: #ffffff;
`
export const Input = styled.input`
  margin-bottom: 10px;
  height: 38.32px;
  background: transparent;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : '2px solid #9758a6')};
  padding-left: 10px;
  color: #ffffff;
  @media (max-width: 994px) {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const SingInLink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
