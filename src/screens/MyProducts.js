import React from 'react';
import axios from 'axios';
import AppBar from '../components/AppBar/AppBar'

import styled from 'styled-components'

const ProductMain = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 10px;
    text-align: center;
`

const ProducContainer = styled.div`
    padding: 10px;
`

const Button = styled.button`
    background: red;
    border: none;
    outline: none;
    padding: 5px 40px;
    color: white;
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
                <ProductMain>
                {this.state.products &&
                    this.state.products.map(product => {
                        return (

                            <ProducContainer key={product.id}>
                                <img src={product.photos[0]} />
                                <div>Nome: {product.name}</div>
                                <p>Descrição: {product.description}</p>
                                <p>Preço: R$ {product.price},00</p>
                                <p> Categoria: {product.category}</p>
                                <Button onClick={() => this.deleteProduct(product.id)}>DELETA</Button>
                            </ProducContainer>
                        )
                    })

                }
                </ProductMain>
                <button onClick={()=>this.props.onchange('Home')}></button>
            </div>
        )
    }
}