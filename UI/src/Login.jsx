import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { BrowserRouter, Router, Route, Link} from 'react-router-dom';
import { History } from 'history';

import UI from './UI';
import Home from './Home';


var ReactDOM = require('react-dom');

var session = "";


export default class Login extends Component {
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
                
                browserHistory.push('UI');
                this.setState({
                    showUser: `Hej ${response.data.user_name}`,
                    showLogin: !this.state.showLogin,
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
                return <UI />;
                
           
                
                };
                if (this.state.loggedIn) {
                return 
                
           var sessionBtn = this.state.loggedIn ?
            (<button className='login-btn' onClick={this.logout.bind(this)}>Logga ut</button>) :
            (<p></p>);
            
                
                };
        
        


                            <BrowserRouter history={browserHistory}>
                            <Route path="/" component={UI}/>
                            </BrowserRouter>
        return (
            <div>
                
                
                 {sessionBtn}
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
  <Login />,
  document.getElementById('root')
);

