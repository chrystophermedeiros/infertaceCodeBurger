import styled from 'styled-components'

export const Container = styled.div`
  background-color: #0d0d10;
  width: 96%;
  border-radius: 20px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  p {
    color: white;
  }
  img {
    height: 120px;
    width: 120px;
    padding: 10px;
  }

  .logo-lixeira {
    width: 50px;
    height: 50px;
    justify-self: center;
    cursor: pointer;
  }
  .cardResumo {
    height: 500px;
  }
`
export const CartItens = styled.div`
  flex-grow: 1;
  overflow: auto;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 1px solid #9758a6;
  text-align: center;
  background-color: black;
  padding: 10px;
  p {
    font-size: 20px;
    color: #9758a6;
    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
  align-items: center;
`

export const Body = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 1px solid #9758a6;
  margin-bottom: 10px;
  text-align: center;
  align-items: center;

  @media (max-width: 500px) {
    img {
      height: 100px;
      width: 100px;
    }
    p {
      font-size: 12px;
    }
  }
  .quantity-container {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    button {
      height: 30px;
      background: transparent;
      color: #9758a6;
      border: none;
      font-size: 20px;
      cursor: pointer;
    }
  }
`

export const EmptyCart = styled.p``
