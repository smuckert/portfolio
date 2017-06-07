import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import UI from './UI';
import Home from './Home';
import Profile from './Profile';



var ReactDOM = require('react-dom');

var session = "";


export default class App extends Component {
    constructor(props) {


        super(props)
        this.state = {
            showLogin: false,
            showUser: '',
            loggedIn: false,
            loginFail: ''
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }


    checkLogin() {
        axios.get('https://jsonplaceholder.typicode.com/posts' + session).then((response) => {
            console.log(response.data);
            
        });
    }

    login(e) {
        
        e.preventDefault();
        var username = this.inputName.value;
        var password = this.inputPassword.value;
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                user_name: username,
                user_password: password
            }
        ).then((response) => {
            console.log(response.data);
            console.log(response.data.user_name);
            const username = response.data.user_name;
            session = "&token=" + response.data.session;
            if (username === null) {
                this.setState({ loginFail: 'Användarnamnet eller lösenordet är fel' });
                return;
            } else {
                
               
                this.setState({
                    showUser: `Hej ${response.data.user_name}`,
                    loggedIn: !this.state.loggedIn
                });   
            }
        });
    }


    logout(e) {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            logout: true
        }).then((response) => {
            console.log(response.data);
            this.setState({
                loggedIn: !this.state.loggedIn,
                showUser: ''
            });
        });
    }

    render() {
        var errorTxt = this.state.loginFail;
        var error = this.state.loginFail ? 'error' : '';
        

            if (this.state.loggedIn) {
                return <UI loggedIn={this.state.loggedIn} showUser={this.state.showUser} logout={this.logout.bind(this)} />; 

                };//Om inloggade redirecta till UI component
                
        		 	
        

                            
        return (
            <div>
               
               
               
                 
                {/*<button className='login-btn' onClick={this.displayLogin}>Logga in</button>*/}
                <div className='username'>{this.state.showUser}</div>
                        <form action="">
                            <h2>Logga in</h2>
                            <input ref={node => this.inputName = node} className="form-control top" /> <br />
                            <input ref={node => this.inputPassword = node} className="form-control" /><br />

                            <button className="btn btn-success" onClick={this.login.bind(this)}>Logga in</button><br />
                            
                        </form>
                        <span className={error}>{errorTxt}</span>
                    
            </div>
        );
    };
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

