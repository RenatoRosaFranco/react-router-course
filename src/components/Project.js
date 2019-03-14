import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Project extends Component {

	render(){
		return(
			<div class='jumbotron'>
				<div class='container'>
					<h2>Parametro</h2><br/>
					<ul class='breadcrumb'>
						<li><NavLink to='/'>Home</NavLink></li>
						<li><NavLink to='/project/1'>Projeto</NavLink></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Project;