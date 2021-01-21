import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const ContainerRegisterProduct = styled.div`
    width:50%;
    border:1px solid black;
    margin-top:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`
const InputProduct = styled.input`
    display:flex;
    align-items:center;
    justify-content:center;
    width:50%;
`
const ProductPayment = styled.div`
    width:50%;
    display:flex;
    align-items:center;
`
const InputProdutPayment = styled.input`
    width:50vw;
    height:2vh;
`
const DetailsPayment = styled.div`
    width:50%;
    display:flex;
    justify-content:row;
    align-items:center;
`
const InputLinkPhoto = styled.input`
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    width:50%;
`
const ButtonRegisterProduct = styled.button`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export default class VisibleProduct extends React.Component {
    state = {
        products: [],
        name: '',
        description: '',
        price: 0,
        paymentMethod: 'A',
        category: 'a',
        photos: [],
        installments: 0

    }


    onchangeNameProduct = (event) => {
        this.setState({ name: event.target.value })
    }
    onchangeDescriptionProduct = (event) => {
        this.setState({ description: event.target.value })
    }
    onchangePriceProduct = (event) => {
        this.setState({ price: event.target.value })
    }
    onchangeLinkPhoto = (event) => {
        this.setState({ photos: [event.target.value]})
    }

    onchangePaymentMethod = (event) => {
        this.setState({ paymentMethod: event.target.value })
    }

    onchangeCategory = (event) => {
        this.setState({ category: event.target.value })
    }
    onchangeInstallments = (event) => {
        this.setState({ installments: event.target.value })
    }



    createProduct = () => {
        const body = {

            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            paymentMethod: this.state.paymentMethod,
            category: this.state.category,
            photos: this.state.photos,
            installments: this.state.installments
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products', body)
            .then((res) => {
                console.log(res.data)
                
                this.getProduct()
                alert('Produto cadastrado com Sucesso')
            }).catch((err) => {

                alert('Não foi possivel cadastrar o produto')
            })
    }

    getProduct = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products')
            .then((res) => {

                console.log(res.data)
                console.log('Produto cadastrado com Sucesso')
            }).catch((err) => {

                console.log('Não foi possivel cadastrar o Produto')
            })

    }



    render() {



        return (
            <div>

                <ContainerRegisterProduct>
                    <h2>Cadastro de  Produto</h2>
                    <p>Nome do produto</p>
                    <InputProduct
                        value={this.state.name}
                        onChange={this.onchangeNameProduct}
                    />
                    <p>Descrição</p>
                    <InputProduct
                        value={this.state.description}
                        onChange={this.onchangeDescriptionProduct}
                    />
                    <ProductPayment>
                        <p>Preço do produto</p>
                        <InputProdutPayment
                            type="number" min="0.00" max="10000.00" step="0.01"
                            value={this.state.price}
                            onChange={this.onchangePriceProduct}
                        />

                        <p>Método de pagamento</p>
                        <select
                            value={this.state.paymentMethod}
                            onChange={this.onchangePaymentMethod}
                        >
                            <option value={'A'}> Selecione</option>
                            <option value={'B'}>Boleto</option>
                            <option value={'C'}>Cartão de crédito</option>
                            <option value={'D'}>Cartão de débito</option>
                        </select>
                    </ProductPayment>

                    <DetailsPayment>
                        <p>Categoria do produto</p>
                        <select
                            type="number"
                            value={this.state.category}
                            onChange={this.onchangeCategory}
                        >
                            <option value={'a'}>Selecione</option>
                            <option value={'b'}>Assessórios</option>
                            <option value={'c'}>Aniversário e Festa</option>
                            <option value={'d'}>Bebê</option>
                            <option value={'f'}>Bijuterias</option>
                            <option value={'g'}>Bolsas e carteiras</option>
                            <option value={'h'}>Casa</option>
                            <option value={'i'}>Decoração</option>
                            <option value={'j'}>Doces</option>
                            <option value={'k'}>Infantil</option>
                            <option value={'l'}>Jogos e Brinquedos</option>
                            <option value={'m'}>Pets</option>
                            <option value={'n'}>Roupas</option>
                            <option value={'o'}>Beleza</option>


                        </select>
                        <p>Número de parcelas</p>
                        <select
                            value={this.state.installments}
                            onChange={this.onchangeInstallments}
                        >
                            <option value={0}>Selecione</option>
                            <option value={1}>1x sem juros</option>
                            <option value={2}>2x sem juros</option>
                            <option value={3}>3x sem juros</option>
                            <option value={4}>4x sem juros</option>
                            <option value={5}>5x sem juros</option>
                            <option value={6}>6x sem juros</option>
                            <option value={7}>7x sem juros</option>
                            <option value={8}>8x sem juros</option>
                            <option value={9}>9x sem juros</option>
                            <option value={10}>10x sem juros</option>
                        </select>

                    </DetailsPayment>
                    <p>Link da Foto</p>
                    <InputLinkPhoto
                        value={this.state.photos}
                        onChange={this.onchangeLinkPhoto}
                    />
                    <ButtonRegisterProduct onClick={this.createProduct} >Cadastrar Produto</ButtonRegisterProduct>


                </ContainerRegisterProduct>

                {this.state.products.map((product) => {
                    return (
                        <div>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <p>{product.paymentMethod}</p>
                            <p>{product.category}</p>
                            <p>{product.installments}</p>
                            <p>{product.photos}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}