import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class About extends Component {
  render() {
    return (
     <div class='jumbotron'>
     		<div class='container'>
     			<h2>About page</h2><br/>
     			<ul class='breadcrumb'>
     				<li><NavLink to='/'>Home</NavLink></li>
     				<li><NavLink to='/about'>About</NavLink></li>
     			</ul>
     		</div>
     </div>
    );
  }
}

export default About;