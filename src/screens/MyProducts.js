import React from 'react';
import axios from 'axios';

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
                {this.state.products &&
                    this.state.products.map(product => {
                        return (
                            <div key={product.id}>
                                <img src={product.photos[0]} />
                                <div>Nome{product.name}</div>
                                <p>Descrição{product.description}</p>
                                <p>Preço{product.price}</p>
                                <p>Método de Pagamentos: {product.paymentMethod}</p>
                                <p> Categoria: {product.category}</p>
                                <button onClick={() => this.deleteProduct(product.id)}>Apagar</button>
                            </div>
                        )
                    })

                }
                <button onClick={()=>this.props.onchange('Home')}></button>
            </div>
        )
    }
}