import React from 'react'
import styled from 'styled-components'

const ProductCart = styled.div`
  background-color: #fff;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 16vw;
  h4 {
    margin-bottom: 10px;
    background-color: #fff;
  }
  p {
    background-color: #fff;
  }
`

const ViewCart = styled.div`
  border-bottom: 1px dashed black;
  display: flex;
  justify-content: space-between;
`

const QuantityButton = styled.button`
  background-color: #000;
  border: 1px solid black;
  color: #fff;
  margin: 0 8px 0 12px;
  outline: none;
  width: 16px;
`

const DeleteButton = styled.button`
    padding: 3px;
    border: none;
    outline: none;
`
const Checkout = styled.button`
    border: none;
    outline: none;
`

const Cart = (props) => {
    let name = props.cart.map((object) => {
      return (
        <ProductCart key={object.id}>
          <p>
            <QuantityButton onClick = { () => props.addProduct(object) }> + </QuantityButton>
            {object.quantity}
            <QuantityButton onClick = { () => props.subtractProduct(object) }> - </QuantityButton>
            {" "}
            {object.name}
          </p>
          <DeleteButton onClick = { () => props.deleteProductCart(object) }> Excluir produto </DeleteButton>
        </ProductCart>
      )
    })
  
    return (
      <ViewCart>
        <h4>Carrinho de compras</h4>
        {this.object.name}
        
        <p>Total: R${props.totalPrice.toFixed(2)}</p>
        {/* <Checkout onClick = {}>Finalizar compra</Checkout> */}
      </ViewCart>
    );
  };
  
  export default Cart