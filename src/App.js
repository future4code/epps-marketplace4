import React from 'react'
import  AppContainer from './components/AppContainer'
import ViewBuyProducts from './components/ViewBuyProducts'


export default class App extends React.Component{
	render(){
		return(
			<div>
				{/* <AppContainer/> */}
				<ViewBuyProducts />
			</div>
		)
	}
}
