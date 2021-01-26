import React from 'react'

export default class MainSuccess extends React.Component {
    render() {
        return (
            <div>
                <div>Icone </div>
                <div>COMPRA REALIZADA COM SUCESSO!</div>
                <button onClick={()=>this.props.changePage('home')}>VOLTE À TELA INICIAL</button>

            </div>
        )
    }
}
