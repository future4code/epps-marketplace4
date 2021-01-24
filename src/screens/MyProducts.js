import React from 'react';

export default class ViewAddProduct extends React.Component {

    render() {
        return (
            <div>
                {this.props.local ?
                this.props.local.createProducts(product => {
                    return (
                        <div key={product.id}>
                            <img src={product.photos[0]} />
                            <div>Nome{product.name}</div>
                            <p>Descrição{product.description}</p>
                            <p>Preço{product.price}</p>
                            <p>Método de Pagamentos: {product.paymentMethod}</p>
                            <p> Categoria: {product.category}</p>
                            <button onClick={() => this.props.deleteProduct(product.id)}>Apagar</button>
                        </div>
                        )
                    })
                
                : <p>Não há cadastro de produtos neste usuário.</p>}
            </div>
        )
    }
}