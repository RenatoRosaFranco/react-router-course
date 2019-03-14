import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import axios from 'axios';

class PersonList extends Component {
	state = {
		persons: []
	}

	constructor() {
		super();
		
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(res => {
				const persons = res.data;
				this.setState({ persons });
			})
	}

	render () {
		return(
			<div class='jumbotron'>
				<div class='container'>
					<h2><i class='glyphicon glyphicon-rocket'></i> Membros</h2>
					<p>Acompanhe a nossa tabela de membros.</p><br/>
					<ul class='breadcrumb'>
						<li><NavLink to='/'>Home</NavLink></li>
						<li><NavLink to='/membros'>Membros</NavLink></li>
					</ul>
					<hr/>

					<table class='table'>
						<thead>
							<tr>
								<td>Id</td>
								<td>Name</td>
								<td>Username</td>
								<td>Street</td>
								<td>City</td>
								<td>Phone</td>
							</tr>
						</thead>
						<tbody>
								{ this.state.persons.map(person =>
								 <tr>
								 	<td>{person.id}</td>
								 	<td><a href=''>{person.name}</a></td>
								 	<td>{person.username}</td>
								 	<td>{person.address.street}</td>
								 	<td><a href=''>{person.address.city}</a></td>
								 	<td>{person.phone}</td>
								 </tr>
								)}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
} 

export default PersonList;
