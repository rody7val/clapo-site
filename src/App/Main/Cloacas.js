import React from 'react';
// imagenes
import idea from '../../img/idea.svg';
import trabajo from '../../img/trabajo.svg';
import investigacion from '../../img/investigacion.svg';
// componentes
import { Container, Row, Col } from 'reactstrap';

class Cloacas extends React.Component {
	constructor () {
		super();
		this.state = {
			text: "Lorem ipsum dolor sin amor, consocictur adipiscing, sod do giusmod tempor. Lorem ipsum dolor sin amor, consocictur adipiscing, sod do giusmod tempor. Lorem ipsum dolor sin amor."
		};
	}

	render() {	
		return (
			<section className='big-triangle triangle-gray white-section'>
				<Container>
					<Row>
						<Col xs={12} sm={4} md={4} >
							<img src={idea} alt='idea.svg'/>
							<h3>Idea</h3>
							<p className='lead'>{this.state.text}</p>
						</Col>
						<Col xs={12} sm={4} md={4} >
							<img src={investigacion} alt='investigacion.svg'/>
							<h3>Investigacion</h3>
							<p className='lead'>{this.state.text}</p>
						</Col>
						<Col xs={12} sm={4} md={4} >
							<img src={trabajo} alt='trabajo.svg'/>
							<h3>Trabajo</h3>
							<p className='lead'>{this.state.text}</p>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Cloacas;

