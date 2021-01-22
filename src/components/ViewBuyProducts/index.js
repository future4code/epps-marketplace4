//Página da Gabi


import React from "react";
import styled from 'styled-components'
import axios from 'axios'
import AppContainer from '../AppContainer'
import DetailsPage from '../DetailsPage/index.js'

export default class ViewBuyProducts extends React.Component {
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

    // addtoCart = (product) => {
    //     let newCart = [...this.state.cart]
    //     const idCart = newCart.id((product) => product.id === product.id)
    //     if (idCart > -1) {
    //         newCart[product.id].quantity += 1;
    //     } else {
    //         const newProduct = {
    //         id: product.id,
    //         name: product.name,
    //         value: product.price,
    //         quantity: 1,
    //     }
    //     newCart.push(newProduct);
    // }

    //     this.setState({ cart: newCart });

    // }

    onChangeQuantity = (event)=>{
        this.setState({quantity: event.target.value})
    }

    totalPrice = () => {
        let totalValue = 0
        for (let product of this.state.productsCart) {
            totalValue += product.price * product.quantity
        }

        return totalValue
    }

    render() {
        return (
            <div>
                <ProductsCart>
                    {/* <img src={this.props.photo} />
                    <p>{this.props.name}</p>
                    <p>{this.state.quantity}</p>
                    <p>{(this.props.price*this.state.quantity).toFixed(2)}</p> */}



                    <h2> Carrinho de compras </h2>
                    {this.productsCart}
                    <p>Total: R$ {this.totalPrice}</p>

                </ProductsCart>
                <CheckOutButton>Finalizar compra</CheckOutButton>
            </div>

        )
                  }}