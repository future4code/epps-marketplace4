import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ViewProductsContainer = styled.div`
    height: 100vh;
    background-color: #BFB965;
`

const ViewProduct = styled.div`
    border: 1px solid red;
`

export default class dViewBuyProducts extends React.Component {
    state = {
        products: [],
        numberOfProducts: 1
    }

    componentDidMount = () => {

        this.getProducts()
    }

    getProducts = () => {
        axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products'
        )
            .then((response) => {
                this.setState({ products: response.data.products })
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    getNumber = (e) =>{
        this.setState({numberOfProducts: e.target.value})
    }

    handleClick = (id, quantity) =>{
        this.props.addCar(id, quantity)
    }
    
    render() {     
        return (
            <ViewProductsContainer>
                {this.state.products.map((product)=>{
                    if(product.id === this.props.idOfClickedProduct)
                    return(
                        <ViewProduct key={product.id}>
                            <img src={product.photos[0]} />
                            <div>{product.name}</div>
                            <p>{product.description}</p>
                            <p>{product.price}</p>

                            <p>{product.paymentMethod}</p>
                            <p>{product.category}</p>
                            <p>{product.installments}</p>
                        </ViewProduct>
                    )
                })}
                
                <label> Quantidade:</label>
                <input type="text" value={this.state.numberOfProducts} onChange={this.getNumber}/>
                <button onClick={()=>this.handleClick(this.props.idOfClickedProduct, this.state.numberOfProducts)}>Adicionar ao carrinho</button>
                <button onClick={()=>this.props.changePage('ViewLittleCar')}> Ver Carrinho </button>
                <button onClick={()=>this.props.changePage('Home')}>Voltar</button>
            </ViewProductsContainer>

        )
    }
}