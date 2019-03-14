import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Contact extends Component {
	render () {
		return(
			<div class='jumbotron'>
				<div class='container'>
					<h2>Contact page</h2><br/>
					<ul class='breadcrumb'>
						<li><NavLink to='/'>Home</NavLink></li>
						<li><NavLink to='/contact'>Contact</NavLink></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Contact;