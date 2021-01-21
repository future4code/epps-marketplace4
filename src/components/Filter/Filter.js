import React from 'react';
import { FilterContainer, InputPreco, FilterDiv } from "./styleFilter";
import axios from 'axios';

export default class Filter extends React.Component {
    state = {
        minPriceValue: '',
        maxPriceValue: '',
        payTypeValue: "",
        orderByValue: "",
        listOfProducts: [],
    }

    handleMinPrice = (e) => {
        this.setState({ minPriceValue: Number(e.target.value) })
    }

    handleMaxPrice = (e) => {
        this.setState({ maxPriceValue: Number(e.target.value) })
    }

    handlePayType = (e) => {
        this.setState({ payTypeValue: e.target.value })
        this.props.filterByPayType(e.target.value)
    }

    handleOrderBy = (e) => {
        this.setState({ orderByValue: e.target.value })
        this.props.orderByPrice(e.target.value)
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products')
            .then(response => {
                this.setState({ listOfProducts: response.data.products })
            }).catch(err => {
                console.log(err)
            })
    }

    // filterByPrice = () => {
    //     console.log('Minimo ', this.state.minPriceValue)
    //     console.log('Máximo', this.state.maxPriceValue)
    //     const minPrice = this.state.listOfProducts.filter(product => {
    //         if (product.price > this.state.minPriceValue && product.price < this.state.maxPriceValue) {
    //             if (product.price === "") {
    //                 product.price = 0
    //             }
    //             return product
    //         }
    //     })
    //     console.log(minPrice) // ESSE VALOR DEVE IR NO COMPONENTE DE CRIAR PRODUTOS
       
    // }

    // filterByPayType = (typeOfPayment) => {
    //     console.log('payType', typeOfPayment)
    //     const payType = this.state.listOfProducts.filter(product => {
    //         if(typeOfPayment === 'all') {
    //             return product
    //         }
    //         if (product.paymentMethod === typeOfPayment) {
    //             return product
    //         }
    //     })
    //     console.log(payType) // ESSE VALOR DEVE IR NO COMPONENTE DE CRIAR PRODUTOS
    // }

    // orderByPrice =(orderBy) =>{
    //     if(orderBy === 'lowerPrice'){
    //         this.orderByLowerPrice()
    //     }else if(orderBy === 'higherPrice'){
    //         this.orderByHigherPrice()
    //     }else if(orderBy === 'name'){
    //         this.orderByName()
    //         console.log('Foi o name')
    //     }
    // }

    // orderByLowerPrice = () =>{
    //     let listProvisory = [...this.state.listOfProducts]
    //     listProvisory.sort(function(a,b){
    //         return Number(a.price) - Number(b.price)
    //     })
    //     console.log(listProvisory)
    // }

    // orderByHigherPrice = () =>{
    //     let listProvisory = [...this.state.listOfProducts]
    //     listProvisory.sort(function(a,b){
    //         return Number(b.price) - Number(a.price)  
    //     })
    //     console.log(listProvisory)
    // }

    // orderByName = () =>{
    //     let listProvisory = [...this.state.listOfProducts]
    //     listProvisory.sort(function(a,b){
    //         return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)
    //     })
    //     console.log(listProvisory)
    // }

    render() {

        return (
            <FilterContainer>
                <FilterDiv>
                    <label>Preço</label>
                    <InputPreco type="text" onChange={this.handleMinPrice} placeholder="R$"></InputPreco>

                    <label>Até</label>
                    <InputPreco type="text" onChange={this.handleMaxPrice} placeholder="R$"></InputPreco>

                    <button onClick={()=>this.props.filterByPrice(this.state.minPriceValue, this.state.maxPriceValue)}>Filtrar</button>
                </FilterDiv>
                <FilterDiv>
                    <label>Forma de pagamento</label>
                    <select onChange={this.handlePayType}>
                        <option value="all">Todos os Produos</option>
                        <option value='card'>Cartäo</option>
                        <option value='1'>Pronta Entrega</option>
                        <option value='2'>Frete grátis</option>
                    </select>
                </FilterDiv>
                <FilterDiv>
                    <label>Ordenar por</label>
                    <select onChange={this.handleOrderBy}>
                        <option value=''>Relevância</option>
                        <option value='lowerPrice'>Menor Preço</option>
                        <option value='higherPrice'>Maior Preço</option>
                        <option value='name'>Nome</option>                        
                    </select>
                </FilterDiv>

            </FilterContainer>
        )
    }
}
