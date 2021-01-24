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
  padding: 5px 30px;
  text-transform: uppercase;
  background-color: rgb(253,194,16);
  outline: none;
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