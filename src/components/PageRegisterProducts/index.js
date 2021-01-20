import React from 'react'
import styled from 'styled-components'


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
        name: '',
        description: '',
        price: 0,
        paymentMethod: '',
        category: '',
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
        this.setState({ photos: event.target.value })
    }



    render() {
        console.log(this.state.nameProduct)
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
                        >
                            <option>Selecione</option>
                            <option>Boleto</option>
                            <option>Cartão de crédito</option>
                            <option>Cartão de débito</option>
                        </select>
                    </ProductPayment>

                    <DetailsPayment>
                        <p>Categoria do produto</p>
                        <select>
                            <option>Selecione</option>
                            <option>Assessórios</option>
                            <option>Aniversário e Festa</option>
                            <option>Bebê</option>
                            <option>Bijuterias</option>
                            <option>Bolsas e carteiras</option>
                            <option>Casa</option>
                            <option>Decoração</option>
                            <option>Doces</option>
                            <option>Infantil</option>
                            <option>Jogos e Brinquedos</option>
                            <option>Pets</option>
                            <option>Roupas</option>
                            <option>Beleza</option>


                        </select>
                        <p>Número de parcelas</p>
                        <select>
                            <option>Selecione</option>
                            <option>1x sem juros</option>
                            <option>2x sem juros</option>
                            <option>3x sem juros</option>
                            <option>4x sem juros</option>
                            <option>5x sem juros</option>
                            <option>6x sem juros</option>
                            <option>7x sem juros</option>
                            <option>8x sem juros</option>
                            <option>9x sem juros</option>
                            <option>10x sem juros</option>
                        </select>

                    </DetailsPayment>
                    <p>Link da Foto</p>
                    <InputLinkPhoto
                        value={this.state.photo}
                        onChange={this.onchangeLinkPhoto}
                    />
                    <ButtonRegisterProduct >Cadastrar Produto</ButtonRegisterProduct>



                </ContainerRegisterProduct>
            </div>
        )
    }
}