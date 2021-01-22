import React from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import Select from './Select/Select';
import InputSearch from './InputSearch';
import { FilterContainer,Label, Button, InputPreco, FilterDivContainer, FilterDiv } from "./styleFilter";


const optionsPayType = [
    { value: "all", label: "Métodos de pagamento" },
    { value: "card", label: "Cartão de crédito" },
    { value: "money", label: "Dinheiro" },
    { value: "app", label: "BitCoins" },
]

const optionsOrderBy = [
    { value: "r", label: "Ordenar Por" },
    { value: "lowerPrice", label: "Menor Preço" },
    { value: "higherPrice", label: "Maior Preço" },
    { value: "name", label: "Nome" },
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

    handlePaytype = (e) => {
        this.setState({ payTypeValue: e.target.value })
    }

    handleOrderBy = (e) => {
        this.setState({ orderByValue: e.target.value })
    }

    onClickFilterFunctions = (minPrice, maxPrice) => {
        const listOfProducts = this.props.filterByPrice(minPrice, maxPrice)
        const listOfProducts2 = this.props.filterByPayType(this.state.payTypeValue, listOfProducts)
        this.props.orderByPrice(this.state.orderByValue, listOfProducts2)
    }

    render() {
        return (
            <FilterContainer>
                <FilterDivContainer>
                    <FilterDiv>
                        <Label>Preço</Label>
                        <InputPreco type="text" onChange={this.handleMinPrice} placeholder="R$"></InputPreco>

                        <Label>Até</Label>
                        <InputPreco type="text" onChange={this.handleMaxPrice} placeholder="R$"></InputPreco>

                    </FilterDiv>

                    <FilterDiv>
                        <Select
                            handleFunction={this.handleOrderBy}
                            optionsArray={optionsOrderBy}
                        />

                    </FilterDiv>
                    <FilterDiv>

                        <Select
                            handleFunction={this.handlePaytype}
                            optionsArray={optionsPayType}
                        />

                    </FilterDiv>
                </FilterDivContainer>

                <Button onClick={() => this.onClickFilterFunctions(this.state.minPriceValue, this.state.maxPriceValue)}>Filtrar</Button>

            </FilterContainer>
        )
    }
}
