import React from 'react'

export default class MainInputSearch extends React.Component {

  state = {
    searchProduct: "",
  };

  onChangeSearchProduct = (event) => {
    this.setState({ searchProduct: event.target.value });
  };

  filterByName = (list) => {
    list = list.filter((product) => {
      if (
        product.name
          .toLowerCase()
          .includes(this.state.searchProduct.toLowerCase())
      ) {
        return true;
      }
    });
    return list;
  };

  render() {
    return (
      <div>
        <p>Buscar Produto:</p>
            <Input
              type={"text"}
              value={this.state.searchProduct}
              onChange={this.onChangeSearchProduct}
            ></Input>
      </div>
    )
  }
}
