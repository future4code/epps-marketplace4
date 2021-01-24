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
        this.enterInPages()
        this.props.checkUser(this.state.loginValue, this.state.codeValue, this.state.typeValue)
    }

    render() {
       
        return (
            <FormContainer>
                <Title>Cadastra-se para comprar ou vender produtos</Title>
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
                     <Button onClick={()=>this.props.changePage('RegisterProduct')}>Anunciar Produto</Button>
                     <Button onClick={()=>this.props.changePage("BodyProduct")}>Comprar Produto</Button>
                    <p>Usuário criado com sucesso!</p>
                     </div>
}
            </FormContainer>
        );
    }
} 