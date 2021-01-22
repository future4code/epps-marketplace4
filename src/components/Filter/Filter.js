import React from 'react';

import { FilterContainer, InputPreco, FilterDiv } from "./styleFilter";
import axios from 'axios';
import { Card } from '@material-ui/core';
import Select from './Select/Select';
import InputSearch from './InputSearch';


const optionsPayType=[
    {value: "all", label:"Métodos de pagamento"},
    {value: "card", label:"Cartão de crédito"},
    {value: "money", label:"Dinheiro"},
    {value: "app", label:"PagSeguro"},
]
const optionsOrderBy=[
    {value: "r", label:"Ordenar Por"},
    {value: "lowerPrice", label:"Menor Preço"},
    {value: "higherPrice", label:"Maior Preço"},
    {value: "name", label:"Nome"},
]

export default class Filter extends React.Component {
    state = {
        minPriceValue: '',
        maxPriceValue: '',
        payTypeValue: "all",
        orderByValue: "r",
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
    }

    handleOrderBy = (e) => {
        this.setState({ orderByValue: e.target.value })
    }

    onClickFilterFunctions = (minPrice, maxPrice) =>{
        const listOfProducts = this.props.filterByPrice(minPrice,maxPrice)
        const listOfProducts2 = this.props.filterByPayType(this.state.payTypeValue, listOfProducts)
        this.props.orderByPrice(this.state.orderByValue, listOfProducts2)
    }

    render() {

        return (
            <FilterContainer>

                <FilterDiv>
                    <label>Preço</label>
                    <InputPreco type="text" onChange={this.handleMinPrice} placeholder="R$"></InputPreco>

                    <label>Até</label>
                    <InputPreco type="text" onChange={this.handleMaxPrice} placeholder="R$"></InputPreco>

                </FilterDiv>
                <FilterDiv>
                    <Select 
                        optionsArray={optionsPayType}
                        handleFunction = {this.handlePayType}
                    />
                </FilterDiv>
                <FilterDiv>
                    <Select 
                        optionsArray={optionsOrderBy}
                        handleFunction = {this.handleOrderBy}
                    />
                </FilterDiv>
                <button onClick={()=>this.onClickFilterFunctions(this.state.minPriceValue, this.state.maxPriceValue)}>Filtrar</button>

            </FilterContainer>
        )
    }
}
