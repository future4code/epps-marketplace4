import React from 'react'
import styled from 'styled-components'

const ProductContainer = styled.section`
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  width: 200px;
  img {
    border-radius: 2px;
  }
`


const Product = (props) => {
    return (
      <ProductContainer>
        <img src={props.photo} alt="" />
          <p className="product-name"> {props.name} </p>
          <p><b> R$ </b> {props.price}</p>
        <button>Adicionar ao carrinho</button>
      </ProductContainer>
    )
}

export default Product