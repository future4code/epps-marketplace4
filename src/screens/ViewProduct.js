import React from 'react'
import axios from 'axios'

export default class ViewBuyProducts extends React.Component {
    state = {
        products: [],
        numberOfProducts: ""
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

    onClickedFunction = (id, quantity) =>{
        this.props.addCar(id, quantity)
    }
    
    render() {
        
        return (
            <div>
                {this.state.products.map((product)=>{
                    if(product.id === this.props.idOfClickedProduct)
                    return(
                        <div key={product.id}>
                        <img src={product.photos[0]} />
                            <div>{product.name}</div>
                            <p>{product.description}</p>
                            <p>{product.price}</p>

                            <p>{product.paymentMethod}</p>
                            <p>{product.category}</p>
                            <p>{product.installments}</p>
                            </div>
                    )
                })}
                <input type="text" onChange={this.getNumber}/>
                <button onClick={()=>this.onClickedFunction(this.props.idOfClickedProduct, this.state.numberOfProducts)}>Adicionar ao carrinho</button>
                <button onClick={this.props.changeToShowLitteCar}> Ver Carrinho </button>
                <button onClick={this.props.changeToShowProductPage}>Voltar</button>
            </div>
        )
    }
}