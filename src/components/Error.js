import React, { Component } from 'react';

class Error extends Component {
	render () {
		return(
			<div class='jumbotron'>
				<div class='container'>
					<p>Path doesn't exist.</p>
				</div>
			</div>
		);
	}
}

export default Error;