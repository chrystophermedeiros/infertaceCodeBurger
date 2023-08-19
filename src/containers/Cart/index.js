import React from 'react'

import CartLogo from '../../assets/cart-burguer.svg'
import { CartItems } from '../../components'
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do carinho" />
      <Wrapper>
        <CartItems />
      </Wrapper>
    </Container>
  )
}
