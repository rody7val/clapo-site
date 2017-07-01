import React from 'react';
import { Container, Collapse, Button, CardBlock, Card  } from 'reactstrap';

class Agua extends React.Component {
	constructor(props) {
		super(props);

		this.onOpened = this.onOpened.bind(this);
		this.onClosed = this.onClosed.bind(this);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false, status: 'Cerrado' };
	}

	onOpened() {
		this.setState({ ...this.state, status: 'Abierto' });
	}

	onClosed() {
		this.setState({ ...this.state, status: 'Cerrado' });
	}

	toggle() {
		const status = !this.state.collapse ? 'Abriendo...' : 'Cerrando...';
		this.setState({ collapse: !this.state.collapse, status });
	}

	render() {	
		return (
			<section className='big-triangle triangle-last gray-section'>
				<Container>
					<h1>Agua Potable</h1>
					<h5>Imprime tu recibo</h5>
					<br />
					<div>
						<Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
							{!this.state.collapse ? 'Imprimir' : 'No, gracias'}
						</Button>
						<p>Estado: {this.state.status}</p>
						<Collapse isOpen={this.state.collapse} onOpened={this.onOpened} onClosed={this.onClosed}>
							<Card>
								<CardBlock>
									Animación que muestra u oculta información.
								</CardBlock>
							</Card>
						</Collapse>
					</div>
				</Container>
			</section>
		);
	}
}

export default Agua;
