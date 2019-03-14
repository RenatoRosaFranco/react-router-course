import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class Footer extends Component {
	render(){
		return(
			<div class='jumbotron footer'>
				<div class='container'>
					<h3 class='text-center'>Footer Section</h3>
					<p  class='text-center'>
						Todos os direitos reservados :)
					</p>
				</div>
			</div>
		);
	}
}

export default Footer;