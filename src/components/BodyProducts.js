import React from "react";
import styled from "styled-components";
import axios from "axios";


const BoxBodyProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    height: 100%;
    justify-items: center;
    padding: 50px;
`
const BodySpan = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Paragraph = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    background-color: blue;
`
const Image = styled.img`
width: 100px;
`

class BodyProducts extends React.Component {
state = {
    products: [],
}

componentDidMount = () => {
    this.getProducts()
    console.log(this.state.products)
}

getProducts = () => { 
    axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products'
        )
    .then((response) => {
        this.setState({products: response.data.products})
        console.log(this.state.products)
    }).catch((error) => {
        console.log(error)
    })
}
      

render() {
    console.log(this.state.products)
    return (
        
        <BoxBodyProducts>
              <p>teste</p>
            {this.state.products.map((product) => {
                return(
                <BodySpan>
                  
                    <Image src={product.photos[0]} />
                    <Paragraph>{product.name}</Paragraph>
                    <Paragraph>R$ {product.price}</Paragraph>
                    <Paragraph> {product.installments}</Paragraph>
                    <Button>Adicionar ao carrinho</Button>
                </BodySpan>
                )
                
            })
            }
        </BoxBodyProducts>
    )
}
}

export default BodyProducts;