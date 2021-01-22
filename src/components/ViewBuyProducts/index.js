import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Cart from './Cart'
import AppContainer from '../AppContainer'
import DetailsPage from '../DetailsPage/index.js'

const ProductsCart = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px;
    align-items: center;
    text-align: center;
`
//Página da Gabi

class ViewBuyProducts extends React.Component {
    state = {
     
        productsCart: [
            {
                id: this.props.id,
                name: this.props.name,
                price: this.props.price,
                quantity: 1,
            }
        ]
    }

    addtoCart = (product) => {
        let newCart = [...this.state.cart]
        let itemsCart = newCart.id.filter (
            (object) => object.id === product.id
        )
        if (itemsCart.length > 0) {
            newCart[0].quantity += 1;
        } else {
            const newObject = {
            id: product.id,
            name: product.name,
            value: product.price,
            quantity: 1,
        }
        newCart.push(newObject);
    }
        this.setState({ cart: newCart });
    }

    addProduct = () => {

    }
    subtractProduct = () => {

    totalPrice = () => {
        let totalValue = 0
        for (let product of this.state.productsCart) {
            totalValue += product.id.price * product.quantity
        }
        return totalValue
    }

    onChangeQuantity = (event)=>{
        this.setState({quantity: event.target.value})
    }    

    render() {
        return (
            <div>
                <ProductsCart>
                    {/* <img src={this.props.photo} />
                    <p>{this.props.name}</p>
                    <p>{this.state.quantity}</p>
                    <p>{(this.props.price*this.state.quantity).toFixed(2)}</p> */}
                   
                    <Cart />

                    <h2> Carrinho de compras </h2>
                    {this.productsCart}
                    <p>Total: R$ {this.totalPrice}</p>

                </ProductsCart>
                <CheckOutButton>Finalizar compra</CheckOutButton>
            </div>

        )

    }
}

export default ViewBuyProducts

