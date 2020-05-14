import React, { Component } from 'react';
import Details from '../details/Details';


class Home extends Component {
	 constructor() {
        super();
        this.state = {
            imageData: [],
            data: []
        }
    }
	
	render() {
        const { classes } = this.props;
        return (
            <div>
                <Details />
				
				</div>);
                
    }
}
export default (Home);