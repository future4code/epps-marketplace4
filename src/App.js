import React from 'react';
import Home from './screens/Home';
import ViewProduct from './screens/ViewProduct';
import ViewLittleCar from './screens/ViewLittleCar';
import Login from './components/users/login'
import Register from './components/users/register'

export default class App extends React.Component {
	state = {
		idOfClickedProduct: "",
		changeToShowProduct: false,
		boughtProducts: [],
		showLittleCar: false,
		showRegisterPage: true
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

	addCar = (id, quantity) => {
		let newBuy = { id: id, quantity: quantity }
		let newList = [...this.state.boughtProducts]
		newList.push(newBuy)
		this.setState({ boughtProducts: newList })
	}

	userEnter = (login, type) => {
		let newUser = {
			id: Date(),
			dateOfCreation: Date(),
			login: login,
			type: type,
			boughtProducts: [],
			createdProducts: []
		}
		this.setState({ newUser: newUser })
		console.log(newUser)
	}

	goToBodyProduct = () => {
		this.setState({ showRegisterPage: !this.state.showRegisterPage })
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
				changeToShowLitteCar={this.changeToShowLitteCar}
				changeToShowProductPage={this.changeToShowProductPage}
			/>
		)
		const littleCar = (
			<ViewLittleCar
				changeToShowLitteCar={this.changeToShowLitteCar}
				changeToShowProductPage={this.changeToShowProductPage}
				boughtProducts={this.state.boughtProducts}

			/>
		)
		return (
			<div>
				{
					this.state.changeToShowProduct ?
						(!this.state.showLittleCar ? productPage : littleCar) :
						(this.state.showRegisterPage ?
							<Register
								userEnter={this.userEnter}
								goToBodyProduct={this.goToBodyProduct}
							/> :
							home)
				}

			</div>
		)
	}
}