import React from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import Select from './Select/Select';
import InputSearch from './InputSearch';
import { FilterContainer, InputPreco, FilterDivContainer, FilterDiv } from "./styleFilter";

// formas de pagamento foi excluido
// const optionsPayType=[
//     {value: "all", label:"Métodos de pagamento"},
//     {value: "card", label:"Cartão de crédito"},
//     {value: "money", label:"Dinheiro"},
//     {value: "app", label:"PagSeguro"},
// ]

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


    handleOrderBy = (e) => {
        this.setState({ orderByValue: e.target.value })
    }

    onClickFilterFunctions = (minPrice, maxPrice) =>{
        const listOfProducts = this.props.filterByPrice(minPrice,maxPrice)
        const listOfProducts2 = this.props.filterByPayType(this.state.payTypeValue, listOfProducts)
        const listOfProducts3 = this.props.orderByPrice(this.state.orderByValue, listOfProducts2)
    }

    render() {
        return (
            <FilterContainer>
                <FilterDivContainer>
                    <FilterDiv>
                        <label>Preço</label>
                        <InputPreco type="text" onChange={this.handleMinPrice} placeholder="R$"></InputPreco>

                        <label>Até</label>
                        <InputPreco type="text" onChange={this.handleMaxPrice} placeholder="R$"></InputPreco>

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
                </FilterDivContainer>

                <button onClick={()=>this.onClickFilterFunctions(this.state.minPriceValue, this.state.maxPriceValue)}>Filtrar</button>

            </FilterContainer>
        )
    }
}
