import PropTypes from 'prop-types'
import React from 'react'
import { toast } from 'react-toastify'

import { Button } from '../'
import { useCart } from '../../hooks/CartContext'
import { Container, Image, Price, Name } from './styles'

export function CardProduct({ product }) {
  const { putProductsInCart } = useCart(product)

  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <Name>{product.name}</Name>
        <Price>{product.formatedPrice}</Price>
        <Button
          onClick={() => {
            putProductsInCart(product)
            toast.success('adcionado com sucesso!', {})
          }}
        >
          Adcionar
        </Button>
      </div>
    </Container>
  )
}

CardProduct.prototype = {
  product: PropTypes.object
}
