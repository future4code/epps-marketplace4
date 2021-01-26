import React from "react"
import styled from 'styled-components'
import AppBar from '../components/AppBar/AppBar'
import Footer from '../components/Footer'
import BodyProducts from '../components/BodyProducts'


const MainContent = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
`
export default class AppContainer extends React.Component {


  render() {
    return (
      <div>
        <AppBar />
        <MainContent>
          <BodyProducts
            changePage = {this.props.changePage}
            getIdOfProduct={this.props.getIdOfProduct}
            addCar={this.props.addCar}
          />
        </MainContent>
        <Footer />
      </div>
    )
  }
}