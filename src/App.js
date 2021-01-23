import React from 'react';
import Home from './screens/Home';
import ViewProduct from './screens/ViewProduct';
import ViewLittleCar from './screens/ViewLittleCar'


export default class App extends React.Component {
	state = {
		idOfClickedProduct: "",
		changeToShowProduct: false,
		boughtProducts: [],
		showLittleCar: false,
	}

	changeToShowProductPage = () => {
		this.setState({ changeToShowProduct: !this.state.changeToShowProduct })
	}
	changeToShowLitteCar = () => {
		this.setState({ showLittleCar: !this.state.showLittleCar })
	}

	getIdOfProduct = (id) => {
		this.setState({ idOfClickedProduct: id })
	}

	addCar = (id, quantity) =>{
		let newBuy = {id: id, quantity: quantity}
		let newList = [...this.state.boughtProducts]
		newList.push(newBuy)
		this.setState({boughtProducts: newList})
	}

	render() {
		const home = (
			<Home
				getIdOfProduct={this.getIdOfProduct}
				changeToShowProductPage={this.changeToShowProductPage}
			/>
		)

		const productPage = (
			<ViewProduct
				idOfClickedProduct={this.state.idOfClickedProduct}
				addCar={this.addCar}
				changeToShowLitteCar = {this.changeToShowLitteCar}
				changeToShowProductPage={this.changeToShowProductPage}
			/>
		)
		const littleCar = (
			<ViewLittleCar
				changeToShowLitteCar = {this.changeToShowLitteCar}
				changeToShowProductPage={this.changeToShowProductPage}
				boughtProducts = {this.state.boughtProducts}

			/>
		)
		return (
			<div>
				{
					this.state.changeToShowProduct ?
						(!this.state.showLittleCar ? productPage: littleCar) :
						home
				}
			</div>
		)
	}
}