import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResumo() {
  const [finalprice, setFinalPrice] = useState(0)
  const [quantityIten, setQuantityItens] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts, limparCarrinho } = useCart()

  useEffect(() => {
    let totalQuantity = 0

    const sumAllItems = cartProducts.reduce((acc, current) => {
      totalQuantity += current.quantity
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
    setQuantityItens(totalQuantity)
  }, [cartProducts])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    try {
      await api.post('orders', { products: order })
      toast.success('Pedido realizado com sucesso')
      limparCarrinho() // Limpa o carrinho
    } catch (error) {
      toast.error('Falha ao tentar realizar o seu pedido, tente novamente')
    }
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2>Resumo do pedido</h2>
          <p>Itens: {quantityIten}</p>
          <p>valor: {formatCurrency(finalprice)}</p>
          <p></p>
          <p>Taxa de entrega: {formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-button">
          <p className="total">Total</p>
          <p className="total-price">
            {formatCurrency(finalprice + deliveryTax)}
          </p>
        </div>
        <Button
          onClick={submitOrder}
          style={{ width: '50%', marginTop: '30px' }}
        >
          Finalizar pedido
        </Button>
      </Container>
    </div>
  )
}
