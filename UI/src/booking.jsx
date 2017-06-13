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
		document.getElementById("myDialog").close();
		
		this.setState ({
			bokning: '',
			showModal: false
		})
	}

	bookingBtn(e) { 
		e.preventDefault();
		console.log('hejjjjjjjjjjj');
    	this.setState ({
			bokning: <p className="hej">Din tid är bokad!</p>
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
		<h1 className="bookingh1">Lediga tider {this.props.date}</h1>
		</div>
		
		<div className="available">

		<button className="btnClass" onClick={this.modal}>{this.props.firstBtn}</button>
		<button className="btnClass" onClick={this.modal}>{this.props.secondBtn}</button>
		<button className="btnClass" onClick={this.modal}>{this.props.thirdBtn}</button>
		<button className="btnClass" onClick={this.modal}>{this.props.fourthBtn}</button>
		<button className="btnClass" onClick={this.modal}>{this.props.fifthBtn}</button>

			

		<dialog id="myDialog">
		<h3 className="h3dialog">Boka tid</h3>
		<input className="modalInput" placeholder="Namn" /><br />
		<input className="modalInput" placeholder="Ålder"/><br />
		<input className="modalInput" placeholder="Ras"/><br />
		<textarea className="textInput" placeholder="Beskrivning av ärendet"/><br />

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