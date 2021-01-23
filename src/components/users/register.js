import React from 'react';
import styled from 'styled-components'

const FormContainer = styled.div`
    width: 300px;
    display: grid;
    padding: 20px;
`

const FormContent = styled.div`
    display: grid;
    grid-template-columns: 100px 200px;
    padding: 10px;
`

const Button = styled.button`
    margin: 20px;
    padding: 5px;
`

const Title = styled.p`
    text-align: center;
`

export default class RegisterUser extends React.Component {

    state = {
        loginValue: "",
        codeValue: "",
        typeValue: "",
        userCreated: false
    }

    handleLogin = (e) => {
        this.setState({ loginValue: e.target.value })
    }
    handleCode = (e) => {
        this.setState({ codeValue: e.target.value })
    }
    handleType = (e) => {
        this.setState({ typeValue: e.target.value })
    }

    enterInPages = () =>{
        this.setState({userCreated:!this.state.userCreated})
    }
    onClickFunction = () =>{
        this.props.userEnter(this.state.loginValue, this.state.typeValue)
        this.enterInPages()
    }

    render() {

        return (
            <FormContainer>
                <Title>Crie sua conta agora!</Title>
                <FormContent>
                    <label>LOGIN: </label>
                    <input onChange={this.handleLogin} placeholder="Login:" />
                </FormContent>
                <FormContent>
                    <label>SENHA: </label>
                    <input onChange={this.handleCode} placeholder="Senha:" />
                </FormContent>
                <FormContent>
                    <label>TIPO: </label>
                    <select onChange={this.handleType}>
                        <option></option>
                        <option>Consumidor</option>
                        <option>Fornecedor</option>
                    </select>
                </FormContent>
                {!this.state.userCreated ?
                 <Button onClick={this.onClickFunction}>REGISTRAR</Button> :
                 <div>
                     <Button onClick={this.props.goToAddProduct}>Anunciar Produto</Button>
                     <Button onClick={this.props.goToBodyProduct}>Comprar Produto</Button>
                    <p>Usuário criado com sucesso!</p>
                     </div>
}
            </FormContainer>
        );
    }
} 