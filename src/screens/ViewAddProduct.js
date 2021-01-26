import React from 'react';
import AddProduct from '../components/PageRegisterProducts/index'

export default class ViewAddProduct extends React.Component{
    render(){
        return(<div>
            <AddProduct
            user={this.props.user}
            changePage={this.props.changePage}
            />
        </div>)
    }
}