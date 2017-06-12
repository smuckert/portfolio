import React, { Component } from 'react';
import logo from './loginLogo.png';

class Djur extends Component {
	constructor(props){
		super(props)
				
	}
  render() {		
    return (
    	<div className="App-header">
      	<img src={logo} className="logo"/>
     		<button className='logout-btn' onClick={this.props.logout}>Logga ut från {this.props.showUser}</button>
     		<button className='start-btn' onClick={this.props.goBack}>Startsida</button>
    	</div>
    	);
    }
}
export default Djur;