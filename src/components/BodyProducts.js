import React from "react";
import styled from "styled-components";
import axios from "axios";
import Filter from "./Filter/Filter";
import ViewBuyProducts from "./ViewBuyProducts/Index";

const BoxBodyProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 30px;
`
const BodySpan = styled.div`
    display: grid;
    grid-template-rows: 1fr 30px auto auto;
`
const BodyRow = styled.div``

const Paragraph = styled.span`
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: ${props => props.fontsize}px;
    font-weight: ${props => props.bold};
    text-transform: ${props => props.uppercase};
`
const Button = styled.button`
    color: rgb(71, 71, 71);
    background-color: rgb(253, 194, 16);
    border: none;
    outline: none;
    padding: 5px 30px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 200px;
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

buyProduct = () => {
    this.setState(<ViewBuyProducts/>)
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
    console.log('payType', typeOfPayment)
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
    console.log(listProvisory)
    this.setState({products: listProvisory}) 

}

orderByHigherPrice = () =>{
    let listProvisory = [...this.state.allProductsFixed]
    listProvisory.sort(function(a,b){
        return Number(b.price) - Number(a.price)  
    })
    console.log(listProvisory)
    this.setState({products: listProvisory}) 

}

orderByName = () =>{
    let listProvisory = [...this.state.allProductsFixed]
    listProvisory.sort(function(a,b){
        return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)
    })
    console.log(listProvisory)
    this.setState({products: listProvisory}) 
}
      

render() {
    return (
    <div>
        <Filter
        filterByPrice={this.filterByPrice}
        filterByPayType = {this.filterByPayType}
        orderByPrice={this.orderByPrice}
        />
        <BoxBodyProducts>
            {this.state.products.map((product) => {
                return(
                <BodySpan>
                    <Image src={product.photos[0]} />
                    <BodyRow>
                        <Paragraph fontsize="18" bold="bold" uppercase="uppercase">{product.name}</Paragraph>
                    </BodyRow>
                    <BodyRow>                    
                        <Paragraph fontsize="16">R$ {product.price},00</Paragraph>
                        <Paragraph fontsize="14">{product.installments}x de { product.installments =  product.price/product.installments} no Cartão</Paragraph>
                    </BodyRow>
                    <BodyRow>
                        <Button onClick={this.buyProduct}>Adicionar ao carrinho</Button>
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