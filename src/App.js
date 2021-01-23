import React from 'react';
import Home from './screens/Home';
import ViewProduct from './screens/ViewProduct';
import ViewLittleCar from './screens/ViewLittleCar';
import ViewUsers from './screens/ViewUsers'
import RegisterProduct from './components/PageRegisterProducts/index'
import BodyProducts from './components/BodyProducts';
import ViewSuccess from './screens/ViewSuccess';

export default class App extends React.Component {
	state = {
		idOfClickedProduct: "",
		changeToShowProduct: false,
		boughtProducts: [],
		page: "Register"
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

	renderPages = () => {
		switch (this.state.page) {
			case 'Register':
				return (<ViewUsers
					userEnter={this.userEnter}
					changePage={this.changePage}
				/>)
				break;
			case 'Home':
				return (<Home
					getIdOfProduct={this.getIdOfProduct}
					changePage={this.changePage}
				/>)
				break;
			case 'RegisterProduct':
				return (<RegisterProduct
					changePage={this.changePage}
				/>)
				break;
			case 'ViewLittleCar':
				return (<ViewLittleCar
					changePage={this.changePage}
					boughtProducts={this.state.boughtProducts}
				/>)
				break;
			case 'ViewProduct':
				return (<ViewProduct
					changePage={this.changePage}
					idOfClickedProduct={this.state.idOfClickedProduct}
					addCar={this.addCar}
				/>)
				break;
			case 'ViewSuccess':
				return (<ViewSuccess
					changePage={this.changePage}
				/>)
				break;
			default:
				return (<Home
					getIdOfProduct={this.getIdOfProduct}
					changePage={this.changePage}
				/>)
				break;
		}
	}

	changePage = (page) => {
		this.setState({ page: page })
		console.log(page)
	}

	render() {
		const printPage = this.renderPages()
		const home = (
			<Home
				getIdOfProduct={this.getIdOfProduct}
				changePage={this.changePage}
			/>
		)

		const productPage = (
			<ViewProduct
				idOfClickedProduct={this.state.idOfClickedProduct}
				addCar={this.addCar}
			/>
		)
		const littleCar = (
			<ViewLittleCar
				boughtProducts={this.state.boughtProducts}

			/>
		)

		return (
			<div>
				{printPage}


			</div>
		)
	}
}