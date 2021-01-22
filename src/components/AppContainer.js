import React from "react"
import styled from 'styled-components'
import AppBar from './AppBar/AppBar'
import BodyProducts from './BodyProducts'

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
          <BodyProducts/>
       </MainContent>
     </div>
    )
  }
}