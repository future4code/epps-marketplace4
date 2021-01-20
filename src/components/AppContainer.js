import React, { Component } from 'react';
import SideBar from './SideBar/SideBar';
import Filter from './Filter/Filter';

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <p>Pronto para começar!</p>
        <Filter/>
        <SideBar/>
      </div>
    )
  }
}
