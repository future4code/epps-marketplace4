import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
   height: 100%;
   min-height: 100vh;
   background-color: #BFB965;
`

const ContainerRegisterProduct = styled.div`
    margin:auto;
    position: relative;
    top: 20px;
    width: 100vh;
    height:90vh;
    background-color: #fff;
    box-shadow: 3px 10px 40px rgba(3,27,78,.1);
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 1fr); 
`

const SepareDiv = styled.div`
    display:${props => props.display};
    flex-direction: column;
    grid-template-columns: ${props => props.columns || '1fr'}; 
    align-items:center;
    justify-content: center;
    width: ${props => props.width};
    
`

const InputProduct = styled.input`
    width: 60vh;
    margin-bottom:10px;
    border: 1px solid #f2b366;
    color: gray;
`
const Select = styled.select`
    width: 60vh;
    margin-bottom:10px;
    padding:6px;
    border: 1px solid #f2b366;
    color: gray;
`

const InputProdutPayment = styled.input`
    width: 60vh;
    margin-bottom:10px;
    border: 1px solid #f2b366;
    color: gray;
`

const Button = styled.button`
    padding: 10px;
    margin: 5px;
    background-color: ${props => props.background || '#f28c0f'};
    color: #fff;
    border: none;
    outline: none;
    font-weight: bold;

    :hover {
        background-color: #f2b366;
    }
`
const Text = styled.h2`
    text-align: center;
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
        installments: 0,
        local: []

    }

    componentDidMount = () =>{
        this.getLocalStorage()
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
        this.setState({ photos: [event.target.value] })
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
                // this.updateUser(res.data.products.id)
                console.log(res.config.data)
                this.getProduct()
                alert('Produto cadastrado com Sucesso')
            }).catch((err) => {

                alert('Não foi possivel cadastrar o produto')
            })
    }

    getProduct = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products')
            .then((res) => {
                alert('Produto cadastrado com Sucesso')
            }).catch((err) => {
                alert('Não foi possivel cadastrar o Produto')
            })

    }

    onClickFunction = () =>{
        this.createProduct()
    }
    getLocalStorage = () => {
		const stringNew = localStorage.getItem("users")
		let newListOfQueries = JSON.parse(stringNew)
		this.setState({ local: newListOfQueries })
	}
	saveInLocalStorage = (users) => {
		localStorage.setItem("users", JSON.stringify(users))
    }
    
    updateUser = (id) =>{
        console.log(id)
        let provisoryList = this.props.user.createdProducts
        provisoryList.push(id)
        let newUser = this.props.user
        newUser.createdProducts = provisoryList 

        this.updateUserInLocal(newUser)
        this.saveInLocalStorage(this.state.local)
    }

    updateUserInLocal = (newUser) =>{
        let local = this.state.local
        if(this.state.local){
            local.map(user=>{
                if(user.id === this.props.user.id){
                    user = newUser
                }
            })
        }
    }

    render() {
        return (
            <Container>
                <ContainerRegisterProduct>
                    <Text>Cadastro de  Produto</Text>
                    <SepareDiv  display="flex" width="100%">
                        <SepareDiv display="grid" width="50%">
                            <label>Nome do produto</label>
                            <InputProduct
                                value={this.state.name}
                                onChange={this.onchangeNameProduct}
                            />
                        </SepareDiv>
                        <SepareDiv display="grid" width="50%">
                            <label>Descrição</label>
                            <InputProduct
                                value={this.state.description}
                                onChange={this.onchangeDescriptionProduct}
                            />
                        </SepareDiv>
                    </SepareDiv>
                    <SepareDiv display="flex" width="100%">

                        <SepareDiv display="grid" width="50%">
                            <label>Preço do produto</label>
                            <InputProdutPayment
                                type="number" min="0.00" max="10000.00" step="0.01"
                                value={this.state.price}
                                onChange={this.onchangePriceProduct}
                            />
                        </SepareDiv>
                        <SepareDiv display="grid" width="50%">
                            <label>Método de pagamento</label>
                            <Select
                                value={this.state.paymentMethod}
                                onChange={this.onchangePaymentMethod}
                            >
                                <option value={'A'}> Selecione</option>
                                <option value={'B'}>Boleto</option>
                                <option value={'C'}>Cartão de crédito</option>
                                <option value={'D'}>Cartão de débito</option>
                            </Select>
                        </SepareDiv>

                    </SepareDiv>
                    <SepareDiv display="flex" width="100%">
                        <SepareDiv display="grid" width="50%">
                            <label>Categoria do produto</label>
                            <Select
                                type="number"
                                value={this.state.category}
                                onChange={this.onchangeCategory}
                            >
                                <option>Selecione</option>
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
                            </Select>
                        </SepareDiv>
                        <SepareDiv display="grid" width="50%">
                            <label>Número de parcelas</label>
                            <Select
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
                            </Select>
                        </SepareDiv>
                    </SepareDiv>
                    <SepareDiv display="flex" width="100%">
                        <SepareDiv display="grid" width="50%">
                            <label>Link da Foto</label>
                            <InputProduct
                                value={this.state.photos}
                                onChange={this.onchangeLinkPhoto}
                            />
                        </SepareDiv>
                    </SepareDiv>
                    <SepareDiv display="grid" width="100%" columns="1fr 1fr 1fr">
                        <Button background="#59d9d9" onClick={this.onClickFunction} >Cadastrar Produto</Button>
                        <Button onClick={()=>this.props.changePage('MyProducts')} >Produtos Cadastrados</Button>
                        <Button onClick={()=>this.props.changePage('Home')} >Página Inicial</Button>
                    </SepareDiv>

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
            </Container>
        )
    }
}