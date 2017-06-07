import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import App from './App';
import { BrowserRouter, Router, Route, Link} from 'react-router-dom';
import Profile from './Profile';




class UI extends Component {
	constructor(props){
		super(props)
		this.state ={
      bookFail:'',
      showBookTime:''


    }
    this.book = this.book.bind(this);
    this.checkBook = this.checkBook.bind(this);
			
	}
	book(e){
    e.preventDefault();
        var name = this.inputname.value;
        var date = this.inputdate.value;

        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                name: name,
                date: date
            }    ).then((response) => {
            console.log(response.data);
            console.log(response.data.user_name);
            const username = response.data.user_name;
            session = "&token=" + response.data.session;
            if (date ===null) {
                this.setState({ bookFail: 'Date already taken' });
                return;
            } else {
              this.setState({
                showBookTime:`Succesful, You're time is ${response.data.date}`

              })
                
            }
        });
  }
	
  render() {
  			
  		
    return (
    	
    <div>
     <input ref={node => this.name = node} />
     <input type="date" ref={node =>this.date = node} />
     

    
    {/*
     <div className="buttons1">
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
