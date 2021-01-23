import React from 'react';
import Success from '../components/sucess/success';

export default class viewSuccess extends React.Component{
    render(){
        return(<div>
            <Success
            changePage={this.props.changePage}/>
        </div>)
    }
}