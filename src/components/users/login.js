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


    export default class LoginUser extends React.Component {
        render() {
            return (
                <FormContainer>
                    <Title>Faça login com sua conta!</Title>
                    <FormContent>
                        <label>LOGIN: </label>
                        <input placeholder="Login:"  />
                    </FormContent>
                    <FormContent>
                        <label>SENHA: </label>
                        <input placeholder="Senha:" />
                    </FormContent>
                    <FormContent>
                        <label>TIPO: </label>
                        <select>
                            <option></option>
                            <option>Consumidor</option>
                            <option>Fornecedor</option>
                        </select>
                    </FormContent>
                    <Button>ENTRAR</Button>
                    
                </FormContainer>
            );
        }
    }