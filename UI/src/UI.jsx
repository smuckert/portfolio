import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import App from './App';
import { BrowserRouter, Router, Route, Link} from 'react-router-dom';
import Profile from './Profile';
import { NavLink } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Inkorg from './inkorg';
import Djur from './djur';
import Booking from './booking';





class UI extends Component {
	constructor(props){
		super(props)
    this.state = {
      profilebtn: false,
      inkorgbtn: false,
      bookingbtn: false,
      djurbtn: false
    };
		
   
			this.profile = this.profile.bind(this);
      this.inkorg = this.inkorg.bind(this);
      this.booking = this.booking.bind(this);
      this.djur = this.djur.bind(this);

	}

	profile(e) {
    e.preventDefault();
    this.setState({
      profilebtn:true,
    })

}
inkorg(e) {
    e.preventDefault();
    this.setState({
      inkorgbtn:true,
    })

}
booking(e) {
    e.preventDefault();
    this.setState({
      bookingbtn:true,
    })

}
djur(e) {
    e.preventDefault();
    this.setState({
      djurbtn:true,
    })

}

	
  render() {
  	if (this.props.loggedIn && this.state.profilebtn === true) {
          console.log('ho');

          return <Profile />; 
            }
    if (this.props.loggedIn && this.state.inkorgbtn === true) {
          console.log('ho');

          return <Inkorg />; 
            }
    if (this.props.loggedIn && this.state.bookingbtn === true) {
          console.log('ho');

          return <Booking />; 
            }

    if (this.props.loggedIn && this.state.djurbtn === true) {
          console.log('ho');

          return <Djur />; 
            }
  		
    return (
    	
    <div>
    <button onClick={this.profile}>Profil </button>
    <button onClick={this.inkorg}>Inkorg </button>
    <button onClick={this.booking}>Boka Tid </button>
    <button onClick={this.djur}>Mina Djur </button>
    
     {/*<div className="buttons1">
          <button className="button">
          
          <i className="fa fa-user-o fa-2x" aria-hidden="true"></i>
          <br/> <br/>Profil

          </button>
          <button className="button">
          <i className="fa fa-paw fa-2x" aria-hidden="true"></i>

          <br/><br/>Mina hästar </button>
        </div>
        <div className="buttons2">
          <button className="button">
          <i className="fa fa-calendar fa-2x" aria-hidden="true"></i>
          <br/><br/>Boka tid
          </button>
          <button className="button">
          <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
          <br/><br/>Inkorg
          </button>
        </div>
         <div className="sched">
          <div className="bookhead">
            <h2>Bokningar</h2>
          </div>
          <li>Bokning1</li>
          <li>Bokning2</li>
          <li>Bokning3</li>
          <li>Bokning4</li>
        </div>*/}
        <h1>Dina Bokningar</h1>
          
     
         	<div>
         	{this.props.showUser}
         	</div>
        
	<button className='login-btn' onClick={this.props.logout}>Logga ut</button>
     
     	
     </div>

    	);
	};
}
export default UI;
