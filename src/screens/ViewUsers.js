import React from 'react';
import Register from '../components/users/register'

export default class viewSuccess extends React.Component {
    render() {
        return (<div>
            <Register
                userEnter={this.props.userEnter}
                changePage={this.props.changePage}
                checkUser={this.props.checkUser}
            />
        </div>)
    }
}