import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return(
		<nav class="navbar navbar-default">
		  <div class="container container-fluid">
		    <div class="navbar-header">
		      <a class="navbar-brand" href="#">
		        <img alt="React" src="..." />
		      </a>

		 			<ul class="nav navbar-nav navbar-right">
		        <li><NavLink to="/">Home</NavLink></li>
		        <li><NavLink to="/about">Sobre</NavLink></li>
		        <li><NavLink to="/project/1">O Projeto</NavLink></li>
		        <li><NavLink to="/membros">Membros</NavLink></li>
		        <li><NavLink to="/contact">Contato</NavLink></li>
		      </ul>
		    </div>
		  </div>
		</nav>
		);
	}
}

export default Navigation;
