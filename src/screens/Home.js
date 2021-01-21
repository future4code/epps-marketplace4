import React from "react"
import styled from 'styled-components'
import AppBar from '../components/AppBar/AppBar'
import SideBar from '../components/SideBar/SideBar'
import BodyProducts from '../components/BodyProducts'
import Filter from '../components/Filter/Filter'

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
`
export default class AppContainer extends React.Component {

  render () {
    return (
     <div>
       <AppBar/>
       <MainContent>
          <SideBar/>
          <div>
            <Filter/>
            <BodyProducts/>
          </div>
       </MainContent>
     </div>
    )
  }
}