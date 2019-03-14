import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
     <div class='jumbotron'>
    	 <div class='container'>
    	 		<h2>Home page</h2><br/>
    	 		<ul class='breadcrumb'>
    	 			<li><NavLink to='/'>Home</NavLink></li>
    	 		</ul>
    	 </div>
     </div>
    );
  }
}

export default Home;