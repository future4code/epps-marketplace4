import React from "react";
import styled from "styled-components";
import axios from "axios";
import Filter from "./Filter/Filter";
import InputSearch from "./Filter/InputSearch";

const BoxBodyProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 30px;
`
const BodySpan = styled.div`
    display: grid;
    grid-template-rows: 1fr 30px auto auto;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.161);
    margin: 20px;
    :hover{
        box-shadow: 0px 3px 10px gray;
    }
`
const BodyRow = styled.div`
    cursor: pointer;
    padding: 10px;
`

const Paragraph = styled.span`
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: ${props => props.fontsize}px;
    font-weight: ${props => props.bold};
    text-transform: ${props => props.uppercase};
`
// const Button = styled.button`
//     color: rgb(71, 71, 71);
//     background-color: rgb(253, 194, 16);
//     border: none;
//     outline: none;
//     padding: 5px 30px;
//     cursor: pointer;
//     text-transform: uppercase;
//     font-size: 12px;
//     width: 100%;
// `
const Image = styled.img`
    width: 100%;
    height: 200px;
    cursor: pointer;
`

class BodyProducts extends React.Component {
state = {
    products: [],
    allProductsFixed: []
}

componentDidMount = () => {
    this.getProducts()
    this.setState({lengthOfProducts: this.state.products.length})
}

getProducts = () => { 
    axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products'
        )
    .then((response) => {
        this.setState({products: response.data.products,
            allProductsFixed: response.data.products})
    }).catch((error) => {
        console.log(error)
    })
}


filterByPrice = (minPrice = 0, maxPrice) => {
    if(maxPrice === 0 || maxPrice === ""){
        maxPrice = Infinity
    }
    const price = this.state.allProductsFixed.filter(product => {
        if (product.price > minPrice && product.price < maxPrice) {
            if (product.price === "") {
                product.price = 0
            }
            return product
        }
    })
    console.log(price) // ESSE VALOR DEVE IR NO COMPONENTE DE CRIAR PRODUTOS
    this.setState({products: price}) 
}

filterByPayType = (typeOfPayment) => {
    const payType = this.state.allProductsFixed.filter(product => {
        if(typeOfPayment === 'all') {
            return product
        }
        if (product.paymentMethod === typeOfPayment) {
            return product
        }
    })
    console.log(payType) // ESSE VALOR DEVE IR NO COMPONENTE DE CRIAR PRODUTOS
    this.setState({products: payType}) 

}

orderByPrice =(orderBy) =>{
    if(orderBy === 'lowerPrice'){
        this.orderByLowerPrice()
    }else if(orderBy === 'higherPrice'){
        this.orderByHigherPrice()
    }else if(orderBy === 'name'){
        this.orderByName()
        console.log('Foi o name')
    }
}

orderByLowerPrice = () =>{
    let listProvisory = [...this.state.allProductsFixed]
    listProvisory.sort(function(a,b){
        return Number(a.price) - Number(b.price)
    })
    this.setState({products: listProvisory}) 

}

orderByHigherPrice = () =>{
    let listProvisory = [...this.state.allProductsFixed]
    listProvisory.sort(function(a,b){
        return Number(b.price) - Number(a.price)  
    })
    this.setState({products: listProvisory}) 

}

orderByName = () =>{
    let listProvisory = [...this.state.allProductsFixed]
    listProvisory.sort(function(a,b){
        return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)
    })
    this.setState({products: listProvisory}) 

}


// filterBySearch = (nameProduct) => {
//     const searchName = this.state.allProductsFixed.filter(product => {
//         if(nameProduct === 'all') {
//             return product
//         }
//         if (product.name === nameProduct) {
//             return product
//         }
//     })
//     console.log(searchName) // ESSE VALOR DEVE IR NO COMPONENTE DE CRIAR PRODUTOS
//     this.setState({products: searchName}) 

// }

filterBySearch = (nameProducts) => {
    // console.log("ok", nameProduct)
    const searchName = this.state.allProductsFixed.filter((product) => {
        const nameProduct = product.name.toLowerCase()
        console.log(nameProduct)
        return nameProduct.includes(nameProducts.toLowerCase())
      })
    
    this.setState({products: searchName}) 

}

render() {
    console.log(this.props.goToDetail()) 
    return (
    <div >
        
        <InputSearch filterBySearch={this.filterBySearch} />

        <Filter
            filterByPrice={this.filterByPrice}
            filterByPayType = {this.filterByPayType}
            orderByPrice={this.orderByPrice}
            filterBySearch={this.filterBySearch}
        />
        <BoxBodyProducts>
            {this.state.products.map((product) => {
                return(
                <BodySpan key={product.id}>                 
                    {/* <BodyRow> */}
                        <Image onClick={() => this.props.goToDetail(product.id)} src={product.photos[0]} />
                    {/* </BodyRow> */}
                    <BodyRow>
                        <Paragraph fontsize="18" bold="bold" uppercase="uppercase">{product.name}</Paragraph>
                    </BodyRow>
                    <BodyRow>                    
                        <Paragraph fontsize="16">R$ {product.price},00</Paragraph>
                        <Paragraph fontsize="14">{product.installments}x de { product.installments =  product.price/product.installments} no Cartão</Paragraph>
                    </BodyRow>
                </BodySpan>
                )
                
            })
            }
        </BoxBodyProducts>
        </div>
    )
}
}

export default BodyProducts;