import React from 'react';
import { FilterContainer, InputPreco, FilterDiv } from "./styleFilter";

const listOfCategories = ["Acessórios", "Aniversário e Festas", "Bebê", "Bijuterias",
    "Bolsas e Carteiras", "Casa", "Casamento", "Convites", "Decoração", "Doces",
    "Eco", "Infantil", "Jogos e Brinquedos", "Jóias", "Lembrancinhas", "Papel e Cia",
    "Pets", "Religiosos", "Roupas", "Saúde e Beleza", "Técnicas de Artesanato",
    "Materiais para artesanato", "Bijuterias e acessórios", "Papel e scrapbooking",
    "Patchwork e costura", "Ver todos"]
// Os nomes devem ser iguais aos nomes dos produtos.

export default class Filter extends React.Component {

    render() {

        return (
            <FilterContainer>
                <FilterDiv>
                    <label>Preço</label>
                    <InputPreco type="text" onChange={this.handleMinPrice} placeholder="R$"></InputPreco>

                    <label>Até</label>
                    <InputPreco type="text" onChange={this.handleMaxPrice} placeholder="R$"></InputPreco>

                    <button>Filtrar</button>
                </FilterDiv>
                <FilterDiv>
                    <label>Forma de pagamento</label>
                    <select>
                        <option value=''>Todos os Produtos</option>
                        <option value=''>Sem juros</option>
                        <option value=''>Pronta Entrega</option>
                        <option value=''>Frete grátis</option>
                    </select>
                </FilterDiv>
                <FilterDiv>
                    <label>Ordenar por</label>
                    <select>
                        <option value=''>Relevância</option>
                        <option value=''>Menor Preço</option>
                        <option value=''>Maior Preço</option>
                    </select>
                </FilterDiv>

            </FilterContainer>
        )
    }
}
