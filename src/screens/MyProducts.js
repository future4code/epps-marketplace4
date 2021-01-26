import React from 'react';
import axios from 'axios';
import AppBar from '../components/AppBar/AppBar'

import styled from 'styled-components'

const DivInput = styled.div`
    margin: 50px;
    display: flex;
    padding: 0 50px;
    text-transform: uppercase;
    border: 1px solid rgba(3,27,78,.1);
`

const ProductMain = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
    margin: 50px;
`

const ProducContainer = styled.div`
    height: auto;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(3,27,78,.1);
    border: 1px solid rgba(3,27,78,.1);
`

const Img = styled.img`
    width: 100%;
    height: 200px;
    background-size: cover;
`
const Text = styled.span`
    display: flex;
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.bold};
    text-align: ${props => props.align};
    margin: ${props => props.margin}px;
    height: ${props => props.height}px;
    align-items: center;

`

const Button = styled.button`
    background-color: ${props => props.background || 'rgb(255 60 60)'};
    border: ${props => props.border || 'rgb(255 60 60)'};
    outline: none;
    padding: 5px 40px;
    margin: 20px;
    color: ${props => props.color || 'white'};
    transition: border-radius ease 0.5s;
    
    :hover {
        background-color: ${props => props.background || 'rgb(255 60 60)'};
        border: ${props => props.border || 'rgb(255 60 60)'};
        border-radius: 20px;
    }
`

export default class ViewAddProduct extends React.Component {

    state = {
        products: []
    }

    componentDidMount = () => {
        this.getProducts()
    }

    getProducts = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products')
            .then((response) => {
                this.setState({ products: response.data.products })
            }).catch((error) => {
                console.log(error)
            })
    }

    deleteProduct = (id) =>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products/${id}`)
            .then((response) => {
                this.getProducts()
                console.log(response)

            }).catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                <AppBar />
                <DivInput>
                    <Text fontSize="28">Produtos Cadastrados da Loja</Text>
                    <Button 
                        background="yellow"
                        border="1px solid rgba(3,27,78,.1)"
                        color="black"
                        onClick={()=>this.props.changePage('Home')}
                    > INICIO</Button>
                </DivInput>
                <ProductMain>
                {this.state.products &&
                    this.state.products.map(product => {
                        return (

                            <ProducContainer key={product.id}>
                                
                                <Text 
                                    fontSize="10" 
                                >
                                     Categoria: {product.category}</Text>

                                <Text 
                                    fontSize="16" 
                                    bold="bold"
                                    align="right"
                                >
                                    {product.name}</Text>

                                    <Img src={product.photos[0]} />

                                <Text 
                                    fontSize="" align="left" height="80"
                                >
                                    <i>{product.description}</i></Text>

                                <Text 
                                    align="left" margin="20"
                                >
                                     R$ <Text fontSize="18"> {product.price},00</Text>
                                </Text>

                                

                                <Button 
                                    onClick={() => this.deleteProduct(product.id)}
                                    background="#ff0000"
                                    border="1px solid #ff0000"
                                >DELETA</Button>
                            </ProducContainer>
                        )
                    })

                }
                </ProductMain>
                
            </div>
        )
    }
}