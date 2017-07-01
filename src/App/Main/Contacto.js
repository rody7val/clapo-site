import React from 'react';
import { Container, Collapse, Button, CardBlock, Card, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Agua extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collapse: false,
			modal: false,
			name: '',
			email: '',
			text: ''
		};

		this.baseState = this.state;

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.messajeSubmit = this.messajeSubmit.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.resetForm = this.resetForm.bind(this);
	}
	
	handleNameChange(e) {
		this.setState({name: e.target.value});
	}
	
	handleEmailChange(e) {
		this.setState({email: e.target.value});
	}
	
	handleTextChange(e) {
		this.setState({text: e.target.value});
	}

	messajeSubmit(e) {
		e.preventDefault();
		this.toggleModal();
	}

	toggleForm() {
		this.setState({ collapse: !this.state.collapse });
	}

	toggleModal() {
		this.setState({ modal: !this.state.modal });
	}

	resetForm() {
		this.setState({ collapse: !this.state.collapse });
		this.setState({ modal: !this.state.modal });
		this.setState({ name: '' });
		this.setState({ email: '' });
		this.setState({ text: '' });
	}

	render() {	
		return (
			<section className='last-section'>
				<Container className='contact'>
					<h1>Contacto</h1>
					<div>
						<h5>Quieres compartirnos una idea, problema o inquietud?</h5>
						<br />
						<Button color="primary" onClick={this.toggleForm} style={{ marginBottom: '1rem' }}>
							{!this.state.collapse ? 'Enviar un mensaje' : 'No, cancelar'}
						</Button>
						<Collapse isOpen={this.state.collapse}>
							<Card>
								<CardBlock>
									<Form className='form' onSubmit={this.messajeSubmit}>
										<FormGroup>
											<Label for="name">Nombre</Label>
											<Input 
												id='name'
												type="text"
												ref='name'
												name="name"
												placeholder="Cómo te llamas?"
												onChange={this.handleNameChange}
												required />
										</FormGroup>
										<FormGroup>
											<Label for="email">Email</Label>
											<Input 
												id="email"
												type="email"
												ref='email'
												name="email"
												placeholder="Tu email?"
												onChange={this.handleEmailChange}
												required />
										</FormGroup>
										<FormGroup>
											<Label for="text">Mensaje</Label>
											<Input 
												id="text"
												type="textarea"
												ref='text'
												name="text"
												placeholder="Cuéntanos ..."
												onChange={this.handleTextChange}
												required />
										</FormGroup>
										<Button className='btn btn-success'>Enviar!</Button>
									</Form>
								</CardBlock>
							</Card>
						</Collapse>
					</div>
				</Container>

				<Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
					<ModalHeader>Informe de mensaje</ModalHeader>
					<ModalBody>
						Muchas gracias {this.state.name}. Tu mensaje fue enviado con exito!
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.resetForm}>Ok, Gracias</Button>
					</ModalFooter>
				</Modal>

			</section>
		);
	}
}

export default Agua;
