import React from 'react';
import styled from 'styled-components';

const SelectTag = styled.select`
    padding: 8px;
`;

export default class Select extends React.Component {
    render(){   
        const renderOption = this.props.optionsArray.map(option=>{
            return (<option value={option.value}>{option.label}</option>)
        })

        return(<SelectTag onChange={this.props.handleFunction}>{renderOption}</SelectTag>
        )
    }
    
}