import React from 'react';
import styled from 'styled-components'


const RegisterContainer = styled.div`
    background-color: #BFB965;
    height: 100vh;
`

const FormContainer = styled.div`
    margin: auto;
    background-color: #fff;
    position: relative;
    top: 100px;
    width: 30%;
    display: grid;
    padding: 20px;
    box-shadow: 3px 10px 40px rgba(3,27,78,.1);
`

const FormContent = styled.div`
    display: grid;
    grid-template-columns: 70px 1fr;
    padding: 10px;
    align-items: center;
    
`

const Button = styled.button`
    margin: 20px;
    padding: 10px;
    background-color: #f28c0f;
    color: #fff;
    border: none;
    outline: none;
    font-weight: bold;

    :hover {
        background-color: #f2b366;
    }
`

const Title = styled.p`
    text-align: center;
    font-size: 22px;
`

const Input = styled.input`
    height: 40px;
    padding: 10px;
    border: 1px solid #f2b366;
`

const Select = styled.select`
    height: 40px;
    padding: 10px;
    border: 1px solid #f2b366;
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
            <RegisterContainer>
                <FormContainer>
                    <Title>Cadastre-se para <br/>comprar ou vender produtos</Title>
                    <FormContent>
                        <label>LOGIN: </label>
                        <Input onChange={this.handleLogin} placeholder="Login:" />
                    </FormContent>
                    <FormContent>
                        <label>SENHA: </label>
                        <Input onChange={this.handleCode} placeholder="Senha:" />
                    </FormContent>
                    <FormContent>
                        <label>TIPO: </label>
                        <Select onChange={this.handleType}>
                            <option></option>
                            <option>Consumidor</option>
                            <option>Fornecedor</option>
                        </Select>
                    </FormContent>
                    {!this.state.userCreated ?
                    <Button onClick={this.onClickFunction}>REGISTRAR</Button> :
                    <div>
            
                        <Button onClick={()=>this.props.changePage('RegisterProduct')}>Anunciar Produto</Button>
                        <Button onClick={()=>this.props.changePage('Home')}>Comprar Produto</Button>

                        <Title>Usuário criado com sucesso!</Title>
                        </div>
    }
                </FormContainer>
            </RegisterContainer>
        );
    }
} 