import React from 'react';
import { LiCategory, SideBarStyle, HCategory } from './styleSideBar';
import axios from 'axios';

const listOfCategories = ["Categoria 1", "Aniversário e Festas", "Bebê", "Bijuterias",
    "Bolsas e Carteiras", "Casa", "Casamento", "Convites", "Decoração", "Doces",
    "Eco", "Infantil", "Jogos e Brinquedos", "Jóias", "Lembrancinhas", "Papel e Cia",
    "Pets", "Religiosos", "Roupas", "Saúde e Beleza", "Técnicas de Artesanato",
    "Materiais para artesanato", "Bijuterias e acessórios", "Papel e scrapbooking",
    "Patchwork e costura", "Ver todos"]
// Os nomes devem ser iguais aos nomes dos produtos.

export default class SideBar extends React.Component {
    // state={
    //     listOfProducts: []
    // }
    // componentDidMount() {
    //     this.getProducts()
    // }

    // getProducts = () => {
    //     axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products')
    //         .then(response => {
    //             this.setState({ listOfProducts: response.data.products })
    //         }).catch(err => {
    //             console.log(err)
    //         })
    // }


    // filterByCatefory = (category) =>{
    //     const provisoryList = this.state.listOfProducts.filter(product => {
    //         if(category === product.category){
    //             return product
    //         }
    //     })
    //     console.log(provisoryList, category) // ESSE VALOR DEVE SER USADO PARA RENDERIZAR A PÁGINA DE PRODUTO
    // }

    render() {
        let categories = listOfCategories.map(category => {
            return (
                <LiCategory onClick={() => this.props.filterByCategory(category)} key={category}>{category}</LiCategory>
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
