import React, { Component } from 'react';
import './App.css';
import App from './App';
import axios from 'axios';
import { BrowserRouter, Router, Route, Link} from 'react-router-dom';
import logo from './loginLogo.png';
import { browserHistory } from 'react-router';

class Profile extends Component {
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
export default Profile;