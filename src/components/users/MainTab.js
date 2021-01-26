import React from 'react'
import TabNav from './TabNav'
import Tab from './tab'
import LoginUsers from './login'
import RegisterUsers from './register'

export default class MainTab extends React.Component {
      
  state = {
    selected: 'Login'
  }

  setSelected = (tab) => {
    this.setState({
      selected: tab
    })
  }

    render() {
        return (
            <TabNav tabs={['Login', 'Registrar']} selected={ this.state.selected} setSelected={ this.setSelected}>
                <Tab isSelected={ this.state.selected === 'Login'} >
                    <LoginUsers/>
                </Tab>
                <Tab isSelected={ this.state.selected === 'Registrar'} >
                    <RegisterUsers />
                </Tab>
            </TabNav>
        )
    }
}
