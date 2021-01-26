import React from "react"
import styled from 'styled-components'

const InputMain = styled.div`
  background-color: ${props => props.background || '#f2f2f2'};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
    padding: 5px 30px;
    margin: ${props => props.margin || '0'}px;
    width: 100vh;
    outline: none;
    color: gray;
`

const Button = styled.button`
    padding: 10px;
    margin: 5px;
    background-color: ${props => props.background || '#f28c0f'};
    color: #fff;
    border: none;
    outline: none;
    font-weight: bold;

    :hover {
        background-color: #f2b366;
    }
`

export default class InputSearch extends React.Component {
    state = {
      name: '',
      InputValueName: '',
      listOfProducts: [],
    }

    handleSearch = (e) => {
        this.setState({ InputValueName: e.target.value })
    }


  render () {
    return (
     <InputMain>
        <Input 
          margin="20"
          placeholder="Nome do Produto.."
          type="text" 
          onChange={this.handleSearch}
        />
        <Button onClick={()=>this.props.filterBySearch(this.state.InputValueName)}>Pesquisar</Button>            
     </InputMain>
    )
  }
}