import React from 'react';
import Home from './screens/Home';
import ViewProduct from './screens/ViewProduct';
import ViewLittleCar from './screens/ViewLittleCar';
import ViewUsers from './screens/ViewUsers'
import ViewAddProduct from './screens/ViewAddProduct'
import ViewSuccess from './screens/ViewSuccess';
import MyProducts from './screens/MyProducts';
import axios from 'axios';

export default class App extends React.Component {
	state = {
		local: [],
		idOfClickedProduct: "",
		changeToShowProduct: false,
		boughtProducts: [],
		// page: "Home",
		// page: "Register",
		page: "RegisterProduct",
		// page: "MyProducts",
		user: {},

	}

	// DEV REGISTRAR

	componentDidMount = () => {
		this.getLocalStorage()
	}

	getLocalStorage = () => {
		const stringNew = localStorage.getItem("users")
		let newListOfQueries = JSON.parse(stringNew)
		this.setState({ local: newListOfQueries })
	}

	saveInLocalStorage = (users) => {
		localStorage.setItem("users", JSON.stringify(users))
	}

	checkUser = (login, code, type) => {
		let count = 0
		if (this.state.local) {
			this.state.local.map(user => {
				if (user.login === login && user.code === code) {
					this.setState({ user: user })
					count += 1
				}
			})
			if (count < 1) {
				this.userEnter(login, code, type)
			}
		} else {
			this.userEnter(login, code, type)
		}

	}

	// DEV END REGISTER

	// DEV PRODUTRO

	getIdOfProduct = (id) => {
		this.setState({ idOfClickedProduct: id })
		this.getBoughtProducts()
	}

	getBoughtProducts = () => {
		let newList = this.state.user.boughtProducts
		this.setState({ boughtProducts: newList })
		console.log(newList, "aqui")
	}

	// ADICIONAR AO CARRINHO 

	addCar = (id, quantity) => {
		let newBuy = { id: id, quantity: quantity }
		let newList = [...this.state.user.boughtProducts]
		newList.push(newBuy)
		this.setState({ boughtProducts: newList })

		let newUser = this.state.user
		newUser.boughtProducts = newList
		this.setState({ user: newUser })
		console.log(this.state.user)

		this.upDateUserOnLocalStorage()
		this.saveInLocalStorage(this.state.local)
	}

	upDateUserOnLocalStorage = () => {
		let provisoryList = this.state.local
		provisoryList.map(user => {
			if (user.id === this.state.user.id) {
				user = this.state.user
			}
		})

	}

	userEnter = (login, code, type) => {
		let newUser = {
			id: Date(),
			dateOfCreation: Date(),
			login: login,
			code: code,
			type: type,
			boughtProducts: [],
			createdProducts: []
		}

		this.setState({ user: newUser })
		this.updateLocal(newUser)
	}

	updateLocal = (newUser) => {
		let listOfUsers = []
		if (this.state.local) {
			listOfUsers = [...this.state.local]
		}
		listOfUsers.push(newUser)
		this.saveInLocalStorage(listOfUsers)
	}

	// RENDERIZANDO AS PAGINAS

	renderPages = () => {

		switch (this.state.page) {
			case 'Register':
				return (<ViewUsers
					userEnter={this.userEnter}
					changePage={this.changePage}
					checkUser={this.checkUser}
				/>)
				break;

			case 'MyProducts':
				return (<MyProducts
					changePage={this.changePage}
					deleteProduct= {this.deleteProduct}
					local={this.state.local}
				/>)
				break;

			case 'Home':
				return (<Home
					getIdOfProduct={this.getIdOfProduct}
					changePage={this.changePage}
				/>)
				break;

			case 'RegisterProduct':
				return (<ViewAddProduct
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
	}

	deleteProduct = (id) => {
		axios.del(`https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products/${id}`)
			.then((res) => { console.log(res) })
			.catch(err => { console.log(err) })
	}

	render() {
		const printPage = this.renderPages()
		return (
			<div>
				{printPage}
				{/* <Home /> */}
			</div>
		)
	}
}