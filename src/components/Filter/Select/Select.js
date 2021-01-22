import React from 'react';

export default class Select extends React.Component {
    render(){   
        const renderOption = this.props.optionsArray.map(option=>{
            return (<option value={option.value}>{option.label}</option>)
        })

        return(<select onChange={this.props.handleFunction}>{renderOption}</select>
        )
    }
    
}