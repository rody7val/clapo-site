import React from 'react';
import { Container } from 'reactstrap';

class Home extends React.Component {

	render() {	
		return (
			<section className='big-triangle triangle-white first-section'>
				<Container>
					<h1>Servicios esenciales para una localidad en crecimiento</h1>
					<p className='lead'>El crecimiento de una sociedad depende de la cooperación de sus actores pricipales</p>
				</Container>
			</section>
		);
	}
}

export default Home;

