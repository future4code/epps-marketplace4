import React from "react";
import styled from "styled-components";
import ProductsContainer from "./ProductsContainer";

const AllProducts = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

class AppContainer extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Produto 1",
        description: "Produto 1",
        price: "10",
        paymentMethod: "Cartão",
        category: "Produtos",
        photo: "https://picsum.photos/400/400?a=1",
        installments: "12",
      },
      {
        id: 2,
        name: "Produto 2",
        description: "Produto 2",
        price: "10",
        paymentMethod: "Cartão",
        category: "Produtos",
        photo: "https://picsum.photos/400/400?a=2",
        installments: "12",
      },
      {
        id: 3,
        name: "Produto 3",
        description: "Produto 3",
        price: "10",
        paymentMethod: "Cartão",
        category: "Produtos",
        photo: "https://picsum.photos/400/400?a=3",
        installments: "12",
      },
      {
        id: 4,
        name: "Produto 4",
        description: "Produto 4",
        price: "10",
        paymentMethod: "Cartão",
        category: "Produtos",
        photo: "https://picsum.photos/400/400?a=4",
        installments: "12",
      },
      {
        id: 5,
        name: "Produto 5",
        description: "Produto 5",
        price: "10",
        paymentMethod: "Cartão",
        category: "Produtos",
        photo: "https://picsum.photos/400/400?a=5",
        installments: "12",
      },
      {
        id: 6,
        name: "Produto 6",
        description: "Produto 6",
        price: "10",
        paymentMethod: "Cartão",
        category: "Produtos",
        photo: "https://picsum.photos/400/400?a=6",
        installments: "12",
      },
      {
        id: 7,
        name: "Produto 7",
        description: "Produto 7",
        price: "10",
        paymentMethod: "Cartão",
        category: "Produtos",
        photo: "https://picsum.photos/400/400?a=7",
        installments: "12",
      },
      {
        id: 8,
        name: "Produto 8",
        description: "Produto 8",
        price: "10",
        paymentMethod: "Cartão",
        category: "Produtos",
        photo: "https://picsum.photos/400/400?a=8",
        installments: "12",
      }
    ]
  };

  render() {
    const { products } = this.state;
    return (
      <AllProducts>
        <ProductsContainer renderContainer={products} />
      </AllProducts>
    );
  }
}

export default AppContainer