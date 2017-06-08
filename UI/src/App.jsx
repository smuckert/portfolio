import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import UI from './UI';
import Home from './Home';
import Profile from './Profile';
import { browserHistory } from 'react-router';

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
        this.registerUser = this.registerUser.bind(this);
    }

    registerUser(e){
        e.preventDefault();
        var newUser = this.inputnewName.value;
        var password = this.inputPassword.value;
        var email = this.inputEmail.value;
        var number = this.inputNumber.value;

        axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            userName: newUser,
            password:password,
            Email:email,
            phoneNumber: number
        }).then((response)=>{
            console.log(response.data);
        });
    }//registrering
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
                
               browserHistory.push('UI');
                this.setState({
                    showUser: ` ${response.data.user_name}`,
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
            return <UI loggedIn={this.state.loggedIn} showUser={this.state.showUser} logout={this.logout} />; 
            };//Om inloggade redirecta till UI component
                               
    return (
        <div> 
            <form>
                <h2>Logga in</h2>
                <input ref={node => this.inputName = node} placeholder="Namn"/> <br />
                <input ref={node => this.inputPassword = node} placeholder="Lösenord"/><br />
                <button onClick={this.login.bind(this)}>Logga in</button><br />
            </form>
                    <span className={error}>{errorTxt}</span>
            <form>
                <h2>Registrera användare</h2>
                <input ref={node =>this.inputnewName = node}placeholder="Namn"/><br /> 
                <input ref={node=>this.inputEmail = node}placeholder="Email"/><br />
                <input ref={node=>this.inputNumber = node}placeholder="Tel Nummer"/><br />
                <input ref={node=>this.inputPassword = node}placeholder="Lösenord"/><br/>
                <button onClick={this.registerUser.bind(this)}>registrera</button>
            </form>
                    
            </div>
        );
    };
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

