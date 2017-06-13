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
import logo from './loginLogo.png';
import './resp.css';

class UI extends Component {
	constructor(props){
		super(props)
    this.state = {
      profilebtn: false,
      inkorgbtn: false,
      bookingbtn: false,
      djurbtn: false,
      firstBtn: '7.00',
			secondBtn: '7.15',
			thirdBtn: '7.30',
			fourthBtn: '7.45',
			fifthBtn: '8.00',
      Veterinär: 'Sture Bengtsson'
    
  };

			this.profile = this.profile.bind(this);
      this.inkorg = this.inkorg.bind(this);
      this.booking = this.booking.bind(this);
      this.djur = this.djur.bind(this);
      this.goBack = this.goBack.bind(this); 
}

profile(e) {
  e.preventDefault();
  browserHistory.push('Profile');
  this.setState({
    profilebtn:true,

  })
}

inkorg(e) {
  e.preventDefault();
  browserHistory.push('Inkorg');
  this.setState({
    inkorgbtn:true,

  })
}

booking(e) {
  e.preventDefault();
  browserHistory.push('Bokning');
  this.setState({
    bookingbtn:true,

  })
}

djur(e) {
  e.preventDefault();
  browserHistory.push('Djurprofil');
  this.setState({
    djurbtn:true,

  })
}

goBack(e) {
  e.preventDefault();
  browserHistory.push('UI');
  this.setState({
    profilebtn: false,
    inkorgbtn: false,
    bookingbtn: false,
    djurbtn: false
    
  })
}

	
render() {

  if (this.props.loggedIn && this.state.profilebtn === true) {
    return <Profile loggedIn={this.props.loggedIn} goBack={this.goBack} showUser={this.props.showUser} logout={this.props.logout} />;
  }

  if (this.props.loggedIn && this.state.inkorgbtn === true) {
    return <Inkorg loggedIn={this.props.loggedIn} goBack={this.goBack} showUser={this.props.showUser} logout={this.props.logout} />; 
  }

  if (this.props.loggedIn && this.state.bookingbtn === true) {
    return <Booking loggedIn={this.props.loggedIn} goBack={this.goBack} showUser={this.props.showUser} firstBtn={this.state.firstBtn} 
    secondBtn={this.state.secondBtn} thirdBtn={this.state.thirdBtn} fourthBtn={this.state.fourthBtn} fifthBtn={this.state.fifthBtn}  
    logout={this.props.logout} date={this.props.date} />; 
  }

  if (this.props.loggedIn && this.state.djurbtn === true) {
    return <Djur loggedIn={this.props.loggedIn} goBack={this.goBack} showUser={this.props.showUser} logout={this.props.logout}  />; 
  }



  return (
    	
  <div className="">
    <div className="App-header">
      <img src={logo} className="logo"/>
      <button className='logout-btn' onClick={this.props.logout}>Logga ut från {this.props.showUser}</button>
      <button className='start-btn' onClick={this.props.start}>Startsida</button>
    </div>
    
    <div className="buttons1">
      <button className="button" onClick={this.profile}>
      <i className="fa fa-user-o fa-2x" aria-hidden="true"></i>
      <br/><p>Profil</p></button>

      <button className="button" onClick={this.djur}>
      <i className="fa fa-paw fa-2x" aria-hidden="true"></i>
      <br/><p>Mina hästar</p></button>
      </div>

      <div className="buttons2">
      <button className="button" onClick={this.booking}>
      <i className="fa fa-calendar fa-2x" aria-hidden="true"></i>
      <br/><p>Boka tid</p></button>

      <button className="button" onClick={this.inkorg}>
      <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
      <br/><p>Inkorg</p></button>
    </div>

    <div className="sched">
      <div className="bookhead">
        <h2>Bokningar</h2>
        </div>
        <li className="bookingTab">Datum: {this.props.date}<p>Tid: {this.state.firstBtn}</p><p>Veterinär: {this.state.Veterinär}</p></li>
        <li className="bookingTab">Datum: {this.props.date}<p>Tid: {this.state.secondBtn}</p><p>Veterinär: {this.state.Veterinär}</p></li>
        <li className="bookingTab">Datum: {this.props.date}<p>Tid: {this.state.thirdBtn}</p><p>Veterinär: {this.state.Veterinär}</p></li>
        
      </div> 	
    </div>

    );
	};
}

export default UI;
