import React, { Component } from 'react';
import logo from './loginLogo.png';


class Booking extends Component {
	constructor(props){
		super(props)
		this.state = {

			bokning: '',

		}	
		this.modal = this.modal.bind(this);
		this.bookingBtn = this.bookingBtn.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	
	modal(e) { 
		e.preventDefault();
		console.log('hej');
    	document.getElementById("myDialog").showModal(); 
	}

	closeModal(e) {
		e.preventDefault();
		var m = document.getElementById("myDialog");
		

		this.setState ({
			bokning: '',
			showModal: false
		})
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
		{this.props.date}
		</div>
		
		<div className="available">
		<button className="btnClass" onClick={this.modal}>{this.props.firstBtn}</button>
		<button className="btnClass" onClick={this.modal}>{this.props.secondBtn}</button>
		<button className="btnClass" onClick={this.modal}>{this.props.thirdBtn}</button>
		<button className="btnClass" onClick={this.modal}>{this.props.fourthBtn}</button>
		<button className="btnClass" onClick={this.modal}>{this.props.fifthBtn}</button>
		<dialog id="myDialog">
		Namn:
		<input className="modalInput" /><br />
		Ålder:
		<input className="modalInput" /><br />
		Ras:
		<input className="modalInput" /><br />
		Beskrivning:
		<textarea /><br />

		<button className="confirmBooking" onClick={this.bookingBtn}>Boka</button>
		<button className="closeModal" onClick={this.closeModal}>X</button><br />
		{this.state.bokning} 



		</dialog>
		</div>
		
		</div>
    	);
    }
}
export default Booking;