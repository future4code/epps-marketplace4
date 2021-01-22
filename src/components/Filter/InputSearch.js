import React from "react"
import styled from 'styled-components'

const InputMain = styled.div`
  background-color: #f2f2f2;
  display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    padding: 5px 30px;
    margin: 20px;
    width: 100vh;
    outline: none;
    color: gray;
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
        <label>Pesquisar:</label>
        <Input 
          placeholder="Pesquisar .."
          type="text" 
          onChange={this.handleSearch}
        />
        <button onClick={()=>this.props.filterBySearch(this.state.InputValueName)}>Filtrar</button>            
     </InputMain>
    )
  }
}