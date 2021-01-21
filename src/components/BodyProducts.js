import React from "react";
import styled from "styled-components";
import axios from "axios";


const BoxBodyProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 30px;
`
const BodySpan = styled.div`
    display: grid;
    grid-template-rows: 1fr 30px auto auto;
`
const BodyRow = styled.div``

const Paragraph = styled.span`
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: ${props => props.fontsize}px;
    font-weight: ${props => props.bold};
    text-transform: ${props => props.uppercase};
`
const Button = styled.button`
    color: rgb(71, 71, 71);
    background-color: rgb(253, 194, 16);
    border: none;
    outline: none;
    padding: 5px 30px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 200px;
`

class BodyProducts extends React.Component {
state = {
    products: [],
}

componentDidMount = () => {
    this.getProducts()
}

getProducts = () => { 
    axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products'
        )
    .then((response) => {
        this.setState({products: response.data.products})
    }).catch((error) => {
        console.log(error)
    })
}
      

render() {
    return (
        
        <BoxBodyProducts>
            {this.state.products.map((product) => {
                return(
                <BodySpan>
                    <Image src={product.photos[0]} />
                    <BodyRow>
                        <Paragraph fontsize="18" bold="bold" uppercase="uppercase">{product.name}</Paragraph>
                    </BodyRow>
                    <BodyRow>                    
                        <Paragraph fontsize="16">R$ {product.price},00</Paragraph>
                        <Paragraph fontsize="14">{product.installments}x de { product.installments =  product.price/product.installments} no Cartão</Paragraph>
                    </BodyRow>
                    <BodyRow>
                        <Button>Adicionar ao carrinho</Button>
                    </BodyRow>
                </BodySpan>
                )
                
            })
            }
        </BoxBodyProducts>
    )
}
}

export default BodyProducts;