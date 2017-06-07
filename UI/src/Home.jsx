import React, { Component } from 'react';
import Login from './Login';

// START SIDAN. DET FÖRSTA SOM SYNS
class Home extends Component {
  render() {
    return (
    <div>
          <Login/>
          <h2>Welcome to Vetly</h2>
        
    </div>

    	);
	}
}
export default Home;