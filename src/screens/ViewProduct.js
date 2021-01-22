import React from "react";
import styled from 'styled-components'
import axios from 'axios'
import AppContainer from '../AppContainer'
import DetailsPage from '../DetailsPage/index.js'



export default class ViewBuyProducts extends React.Component {
  state = {
    currentScreen: 'list',
    clickedIdProduct: ""
  }
  goToList = () => {
    this.setState({ currentScreen: 'list' })
  }

  goToDetail = (id) => {
    console.log(id)
    this.setState({ currentScreen: 'detail', clickedIdProduct: id })
  }

  getCurrentScreen = () => {
    switch (this.state.currentScreen) {
      case 'list':
        return <AppContainer goToDetail={this.goToDetail} />
      case 'detail':
        return <DetailsPage goToList={this.goToList} idProduct={this.state.clickedIdProduct} />
      default:
        return <AppContainer />
  
    }}
  render() {

    console.log(this.state.clickedIdProduct)
    return (
      <div className="App">
        {this.getCurrentScreen()}
      </div>
    );
  }
}