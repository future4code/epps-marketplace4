import React from 'react'
import axios from 'axios'

export default class ViewLittleCar extends React.Component {
    state = {
        products: [], 
        price:0
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
                this.totalPrice(response.data.products)
            }).catch((error) => {
                console.log(error)
            })
    }
    totalPrice = (listOfproducts) =>{
        let price = 0
        listOfproducts.map(product=>{
            this.props.boughtProducts.map(boughtProduct=>{
                if (product.id === boughtProduct.id){
                    price += product.price * boughtProduct.quantity 
                }
            })
        })
        console.log(price)
        this.setState({price:price})
    }


    render() {
        console.log(this.props.boughtProducts)
        return (
            <div>
                {this.state.products.map(product => {
                    return (
                        this.props.boughtProducts.map(boughtProduct => {
                            if (product.id === boughtProduct.id) 
                                return (
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
                        })
                    )
                })}
                <div>
                    <h3>Valor Total : R${this.state.price}</h3>
                    <button onClick={()=>this.props.changePage('ViewSuccess')}>Comprar</button>
                    <button onClick={()=>this.props.changePage('Home')}>Voltar</button>

                </div>
            </div>
        )
    }
}