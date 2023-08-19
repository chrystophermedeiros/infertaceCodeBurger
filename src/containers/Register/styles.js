import styled from 'styled-components'

import Fundo from '../../assets/background.svg'
import RegisterImg from '../../assets/register-image.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Fundo}');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const RegisterImage = styled.img`
  height: 80%;
  @media (max-width: 994px) {
    display: none;
  }
`

export const ContainerItens = styled.div`
  background: black;
  border-radius: 0 10px 10px 0;
  height: 80%;
  padding: 2px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 994px) {
    background: url('${RegisterImg}');
    background-size: cover;
    width: 95%;
    padding: 25px 25px;
  }

  h1 {
    margin-top: 2px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 2px;
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
  margin-top: ${props => (props.error ? '12px' : '28px')};
  margin-bottom: 3px;
  color: #ffffff;
`
export const Input = styled.input`
  margin-bottom: 10px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
  @media (max-width: 994px) {
    width: 100%;
  }
`

export const SingInLink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  @media (max-width: 994px) {
    color: black;
  }
  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
