import React from 'react';
import styled from 'styled-components'

const Ul = styled.ul`
    width: 340px;
`

    export default class TabNav extends React.Component {
        render() {
            return (
                <div style = {{width: '30% '}}> 
                    <Ul className = "nav nav-tabs" > 
                        {
                            this.props.tabs.map( tab => {
                                const active = (tab === this.props.selected ? 'active' : '')

                                return (
                                    <li className='w-50 nav-item' key={ tab }> 
                                        <a className={"nav-link " + active} onClick={ () => this.props.setSelected(tab)}>
                                            { tab }
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </Ul> 
                    {this.props.children} 
                </div>
            );
        }
    }