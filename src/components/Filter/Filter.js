import React from 'react';
import InputSearch from './InputSearch';
import { FilterContainer, InputPreco, FilterDivContainer, FilterDiv } from "./styleFilter";

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

    // handlePayType = (e) => {
    //     this.setState({ payTypeValue: e.target.value })
    //     this.props.filterByPayType(e.target.value)
    // }

    handleOrderBy = (e) => {
        this.setState({ orderByValue: e.target.value })
        this.props.orderByPrice(e.target.value)
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

                        <button onClick={()=>this.props.filterByPrice(this.state.minPriceValue, this.state.maxPriceValue)}>Filtrar</button>
                    </FilterDiv>
                    {/* <FilterDiv>
                        <label>Forma de pagamento</label>
                        <select onChange={this.handlePayType}>
                            <option value="all">Todos os Produos</option>
                            <option value='card'>Cartäo</option>
                            <option value='1'>Pronta Entrega</option>
                            <option value='2'>Frete grátis</option>
                        </select>
                    </FilterDiv> */}
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

            </FilterContainer>
        )
    }
}
