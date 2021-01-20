import React from 'react';
import { LiCategory, SideBarStyle, HCategory } from './styleSideBar';

const listOfCategories = ["Acessórios", "Aniversário e Festas", "Bebê", "Bijuterias",
    "Bolsas e Carteiras", "Casa", "Casamento", "Convites", "Decoração", "Doces",
    "Eco", "Infantil", "Jogos e Brinquedos", "Jóias", "Lembrancinhas", "Papel e Cia",
    "Pets", "Religiosos", "Roupas", "Saúde e Beleza", "Técnicas de Artesanato",
    "Materiais para artesanato", "Bijuterias e acessórios", "Papel e scrapbooking",
    "Patchwork e costura", "Ver todos"]
// Os nomes devem ser iguais aos nomes dos produtos.

export default class SideBar extends React.Component {

    filterByCatefory = (category) =>{
        console.log(category)
    }

    render() {
        let categories = listOfCategories.map(category => {
            return (
                <LiCategory onClick={() => this.filterByCatefory(category)} key={category}>{category}</LiCategory>
            )
        })
        return (
            <SideBarStyle>
                <HCategory>Categorias</HCategory>
                {categories}


            </SideBarStyle>
        )
    }
}
