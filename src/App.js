import React from 'react';
import Home from './screens/Home';
import ViewProduct from './screens/ViewProduct';
import ViewLittleCar from './screens/ViewLittleCar';
import Login from './components/users/login'
import Register from './components/users/register'
import AppBar from './components/AppBar/AppBar'

export default class App extends React.Component {
	state = {
		idOfClickedProduct: "",
		showProduct: false,
		boughtProducts: [],
		showLittleCar: false,
		showRegisterPage: true,
		showNotification: false
	}

	goToHome = () => {
		this.setState({ showRegisterPage: !this.state.showRegisterPage })
	}

	goToProduct = () => {
		this.setState({ showProduct: !this.state.showProduct })
	}

	goToLittleCar = () => {
		this.setState({ showLittleCar: true, showProduct: true })
	}

	getIdOfProduct = (id) => {
		this.setState({ idOfClickedProduct: id })
	}

	addCar = (id, quantity) => {
		let newBuy = { id: id, quantity: quantity }
		let newList = [...this.state.boughtProducts]
		newList.push(newBuy)
		this.setState({ boughtProducts: newList })
		this.setShowNotification(true)
		setTimeout(() =>  this.setShowNotification(false), 5000)
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

	setShowNotification = (notification) => {
		this.setState({ showNotification: notification })
	}

	render() {
		const productPage = (
			<>
				<AppBar goToLittleCar={this.goToLittleCar} />
				{this.state.showNotification && <div>Produto adicionado ao carrinho!</div>}
				<ViewProduct
					idOfClickedProduct={this.state.idOfClickedProduct}
					addCar={this.addCar}
					goToLittleCar={this.goToLittleCar}
					goToProduct={this.goToProduct}
				/>
			</>
		)

		const littleCar = (
			<>
				<AppBar goToLittleCar={this.goToLittleCar} />
				{this.state.showNotification && <div>Produto adicionado ao carrinho!</div>}
				<ViewLittleCar
					goToLittleCar={this.goToLittleCar}
					goToProduct={this.goToProduct}
					boughtProducts={this.state.boughtProducts}

				/>
			</>
		)
		
		if(this.state.showProduct) {
			if(this.state.showLittleCar) return littleCar
			return productPage
		}

		if(this.state.showRegisterPage) {
			return (
				<Register
					userEnter={this.userEnter}
					goToHome={this.goToHome}
				/>
			)
		}

		return (
			<>
				<AppBar goToLittleCar={this.goToLittleCar} />
				{this.state.showNotification && <div>Produto adicionado ao carrinho!</div>}
				<Home
					getIdOfProduct={this.getIdOfProduct}
					goToProduct={this.goToProduct}
					addCar={this.addCar}
				/>
			</>
		)
	}
}