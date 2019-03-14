import React, { Component } from 'react';
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
					<h2>Membros</h2>
					<p>Acompanhe a nossa tabela de membros.</p>
					<hr/>

					<table class='table'>
						<thead>
							<tr>
								<td>Id</td>
								<td>Name</td>
								<td>Username</td>
								<td>Street</td>
								<td>City</td>
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
