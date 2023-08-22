import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 35px;
  width: 100%;
  background-color: #0d0d10;

  h1 {
    color: #ffffff;
    &:hover {
      color: #9758a6;
    }
  }

  .rec.rec-arrow {
    border-radius: 0;
    background-color: #9758a6;
    color: #ffffff;
    border-radius: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media (max-width: 994px) {
      display: none;
    }
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10px;
  @media (max-width: 994px) {
    width: 150px;
    height: 150px;
  }
`

export const Button = styled(Link)`
  margin-top: 16px;
  width: 283;
  height: 50px;
  border: none;
  background: #9758a6;
  border-radius: 8px;

  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
