import React, { Component } from 'react';
import logo from './loginLogo.png';


class Booking extends Component {
	constructor(props){
		super(props)
		this.state = {
			date: '2017-06-09',
			bokning: '',
			firstBtn: '7.00',
			secondBtn: '7.15',
			thirdBtn: '7.30',
			fourthBtn: '7.45',
			fifthBtn: '8.00'

		}	
		this.modal = this.modal.bind(this);
		this.bookingBtn = this.bookingBtn.bind(this);
	}
	
	modal(e) { 
		e.preventDefault();
		console.log('hej');
    	document.getElementById("myDialog").showModal(); 
	}

	bookingBtn(e) { 
		e.preventDefault();
		console.log('hejjjjjjjjjjj');
    	this.setState ({
			bokning: 'Din tid är bokad!'
		})
	}

  render() {
  			
  		
    return (
		<div className="bookingWrapper">
    	<div className="App-header">
      		<img src={logo} className="logo"/>
     		<button className='logout-btn' onClick={this.props.logout}>Logga ut från {this.props.showUser}</button>
     		<button className='start-btn' onClick={this.props.goBack}>Startsida</button>
    	</div>

		<div className="datePicker">
		{this.state.date}
		</div>
		
		<div className="available">
		<button onClick={this.modal}>{this.state.firstBtn}</button>
		<button onClick={this.modal}>{this.state.secondBtn}</button>
		<button onClick={this.modal}>{this.state.thirdBtn}</button>
		<button onClick={this.modal}>{this.state.fourthBtn}</button>
		<button onClick={this.modal}>{this.state.fifthBtn}</button>
		<dialog id="myDialog">
		Namn:
		<input className="modalInput" />
		Ålder:
		<input className="modalInput" />
		Ras:
		<input className="modalInput" />
		Beskrivning
		<textarea />

		<button className="confirmBooking" onClick={this.bookingBtn}>Boka</button>
		{this.state.bokning}



		</dialog>
		</div>
		
		</div>
    	);
    }
}
export default Booking;