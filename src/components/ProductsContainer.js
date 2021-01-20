import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const StyleProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Products = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  height: 100%;
  justify-items: center;
  padding: 50px;
`

const ProductsContainer = (props) => {
  return (
    <StyleProductsContainer>
      <Products>
        {props.renderContainer.map((product) => {
          return (
            <Product
              id={product.id}
              photo={product.photo}
              name={product.name}
              price={product.price}
              installments={product.installments}
            />
          )
        })}
      </Products>
    </StyleProductsContainer>
  )
}

export default ProductsContainer