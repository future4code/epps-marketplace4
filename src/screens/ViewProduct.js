import React from 'react'
import axios from 'axios'



export default class ViewBuyProducts extends React.Component {
    state = {
        products: []
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


    
    render() {
        console.log(this.state.products)
        return (
            <div>

                {this.state.products.map((product)=>{
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

                <button>Adicionar ao carrinho</button>
            </div>
        )
    }
}