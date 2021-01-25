import React from 'react';
import Select from './Select/Select';
import { FilterContainer,Label, InputPreco, FilterDivContainer, FilterDiv } from "./styleFilter";
import styled from 'styled-components'

const Button = styled.button`
    color: rgb(71, 71, 71);
    background-color: rgb(253, 194, 16);
    border: none;
    outline: none;
    padding: 5px 30px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    height: 40px;
`

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
