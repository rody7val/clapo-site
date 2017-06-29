import React from 'react';
import logo from './img/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Header.css';
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	render() {
		return (
			<Navbar className='App-header' color="faded" light>
				<Container className='min-content'>

					<div className='App-brand'>
						<a href='/'>
							<img className='img-fluid logo' src={logo} alt='logo.svg'/>
						</a>
						<h4 className='title'>Cooperativa Ltda de Agua Potable y Otros Servicios publicos</h4>
					</div>

					<Nav navbar className='App-nav'>
						<NavItem className='App-nav-item'>
							<NavLink className='App-nav-link' href="#cloacas">CLOACAS</NavLink>
						</NavItem>
						<NavItem className='App-nav-item'>
							<NavLink className='App-nav-link' href="#internet">INTERNET</NavLink>
						</NavItem>
						<NavItem className='App-nav-item'>
							<NavLink className='App-nav-link' href="#canal2">CANAL2</NavLink>
						</NavItem>
						<NavItem className='App-nav-item'>
							<NavLink className='App-nav-link' href="#agua">AGUA</NavLink>
						</NavItem>
						<NavItem className='App-nav-item'>
							<NavLink className='App-nav-link' href="#contacto">CONTACTO</NavLink>
						</NavItem>
						<NavItem className='App-nav-item'>
							<a href='/admin' className='App-nav-link-button btn btn-sm btn-outline-primary'>Area Clientes</a>
						</NavItem>
					</Nav>

					<NavbarToggler className='App-toggle' onClick={this.toggleNavbar} />
				</Container>

				<Collapse isOpen={!this.state.collapsed}>

					<Nav navbar className='App-nav-toggle'>
						<NavItem className='App-nav-item col-6'>
							<NavLink className='App-nav-link' href="#cloacas">CLOACAS</NavLink>
						</NavItem>
						<NavItem className='App-nav-item col-6'>
							<NavLink className='App-nav-link' href="#internet">INTERNET</NavLink>
						</NavItem>
						<NavItem className='App-nav-item col-6'>
							<NavLink className='App-nav-link' href="#canal2">CANAL2</NavLink>
						</NavItem>
						<NavItem className='App-nav-item col-6'>
							<NavLink className='App-nav-link' href="#agua">AGUA</NavLink>
						</NavItem>
						<NavItem className='App-nav-item col-6'>
							<NavLink className='App-nav-link' href="#contacto">CONTACTO</NavLink>
						</NavItem>
						<NavItem className='App-nav-item col-6'>
							<a href='/admin' className='App-nav-link-button btn btn-md btn-outline-primary'>Area Clientes</a>
						</NavItem>
					</Nav>

				</Collapse>
			</Navbar>
		);
	}
}