import React from "react";
import styled from "styled-components";
import axios from "axios";
import Filter from "./Filter/Filter";
import SideBar from "./SideBar/SideBar";
import InputSearch from "./Filter/InputSearch";

const Container = styled.div`
    max-width: 100vw;
    min-width:99vw;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 10vh 10vh 1fr;
`;
const BoxBodyProducts = styled.div`
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 30px;
`
const BodySpan = styled.div`
    display: grid;
    max-height: 300px;
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
    cursor: pointer;
`

class BodyProducts extends React.Component {

state = {
    products: [],
    allProductsFixed: [],
    productsFilterByPrice: [],
}

componentDidMount = () => {
    this.getProducts()
}

saveInLocalStorage = (products) => {
    localStorage.setItem("products", JSON.stringify(products))
}

getLocalStorage = () => {
    const stringNew = localStorage.getItem("products")
    let newProducts = JSON.parse(stringNew)
    this.props.getListOfProducts(newProducts)  
}

getProducts = () => { 
    axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products'
        )
    .then((response) => {
        this.setState({products: response.data.products,
            allProductsFixed: response.data.products})
        this.saveInLocalStorage(response.data.products)
    }).catch((error) => {
        console.log(error)
    })
}

buyProduct = (id) => {
    this.props.addCar(id, 1)
}

filterByPrice = (minPrice = 0, maxPrice) => {
   
    if(maxPrice === 0 || maxPrice === ""){
        maxPrice = Infinity
    }
    const price = this.state.allProductsFixed.filter(product => {
        if (product.price >= minPrice && product.price <= maxPrice) {
            if (product.price === "") {
                product.price = 0
            }
            return product
        }
    })

    return price
}


filterByPayType = (typeOfPayment, listProducts) => {
    const payType = listProducts.filter(product => {

        if(typeOfPayment === 'all') {
            return product
        }
        if (product.paymentMethod === typeOfPayment) {
            return product
        }
    })
    return payType
    
}

orderByPrice =(orderBy, listProducts) => {
    if(orderBy === 'lowerPrice'){
        this.orderByLowerPrice(listProducts)
    }else if(orderBy === 'higherPrice'){
        this.orderByHigherPrice(listProducts)
    }else if(orderBy === 'name'){
        this.orderByName(listProducts)
    } else{
        this.setState({products: listProducts})
        return listProducts
    }
}

orderByLowerPrice = (listProducts) => { 
    listProducts.sort(function(a,b){
        return Number(a.price) - Number(b.price)
    })
    this.setState({products: listProducts}) 
    return listProducts
}

orderByHigherPrice = (listProducts) => {
    listProducts.sort(function(a,b){
        return Number(b.price) - Number(a.price)  
    })    
    this.setState({products: listProducts}) 
    return listProducts
}

orderByName = (listProducts) => {

    listProducts.sort(function(a,b){
        return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)
    })

    this.setState({products: listProducts})
    return listProducts
}

filterByCategory = (category) => {
        const provisoryList = this.state.allProductsFixed.filter(product => {
            if(category === product.category){
                return product
            }
        })
        console.log(provisoryList)
        this.setState({products: provisoryList})
    }


filterBySearch = (nameProducts) => {
    const searchName = this.state.allProductsFixed.filter((product) => {
        const nameProduct = product.name.toLowerCase()
        console.log(nameProduct)
        return nameProduct.includes(nameProducts.toLowerCase())
      })
    
    this.setState({products: searchName}) 

}

onClickProduct = (id) => {
    this.props.getIdOfProduct(id)
    this.props.goToProduct()
}


render() {
    return (

    <Container>
        
        <SideBar
            filterByCategory ={this.filterByCategory}
        />

        <InputSearch filterBySearch={this.filterBySearch} />

        <Filter
        filterByPrice={this.filterByPrice}
        filterByPayType = {this.filterByPayType}
        orderByPrice={this.orderByPrice}
        updateType={this.state.upadateType}
        updateOrder ={this.state.updateOrder}
        
        />
        <BoxBodyProducts>
            {this.state.products.map((product) => {
                return(
                <BodySpan key={product.id}>                 
                    {/* <BodyRow> */}
                        <Image onClick={() => this.onClickProduct(product.id)} src={product.photos[0]} />
                    {/* </BodyRow> */}
                    <BodyRow>
                        <Paragraph fontsize="18" bold="bold" uppercase="uppercase">{product.name}</Paragraph>
                    </BodyRow>
                    <BodyRow>                    
                        <Paragraph fontsize="16">R$ {product.price},00</Paragraph>
                        <Paragraph fontsize="14">{product.installments}x de { product.installments =  product.price/product.installments} no Cartão</Paragraph>
                    </BodyRow>
                    <BodyRow>
                        <Button onClick={() => this.buyProduct(product.id)}>Adicionar ao carrinho</Button>
                    </BodyRow>
                </BodySpan>
                )
            })
            }
            {this.state.products.length < 1 && <p>Seleção inexistente</p>}
        </BoxBodyProducts>

        </Container>
    )
}
}

export default BodyProducts;