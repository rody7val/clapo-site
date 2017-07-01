import React from 'react';
import logo from '../../img/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/Header.css';
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: true,
			navs: [
				{	link: '#cloacas',		name: 'CLOACAS' },
				{	link: '#internet',	name: 'INTERNET' },
				{	link: '#canal2',		name: 'CANAL2' },
				{	link: '#agua',			name: 'AGUA' },
				{	link: '#contacto',	name: 'CONTACTO' }
			]
		};

		this.toggleNavbar = this.toggleNavbar.bind(this);
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {

		return (
			<Navbar className='App-header' fixed='top' color="faded" light>
				<Container className='full-content header'>

					<div className='App-brand'>
						<a href='/'>
							<img className='img-fluid logo' src={logo} alt='logo.svg'/>
						</a>
						<h4 className='title'>Cooperativa Ltda de Agua Potable y Otros Servicios publicos</h4>
					</div>

					<Nav navbar className='App-nav'>
						{
							this.state.navs.map( (nav, index) => (
								<NavItem className='App-nav-item'>
									<NavLink className='App-nav-link' key={index} href={nav.link}>{nav.name}</NavLink>
								</NavItem>
							))
						}
						<NavItem className='App-nav-item'>
							<a href='/admin' className='App-nav-link-button btn btn-sm btn-outline-primary'>Area Clientes</a>
						</NavItem>
					</Nav>

					<NavbarToggler className='App-toggle' onClick={this.toggleNavbar} />
				</Container>

				<Container className='full-content header-toggle'>
					<Collapse isOpen={!this.state.collapsed}>

						<Nav navbar className='App-nav-toggle'>
							{
								this.state.navs.map( (nav, index) => (
									<NavItem className='App-nav-item col-6'>
										<NavLink className='App-nav-link' onClick={this.toggleNavbar} key={index} href={nav.link}>{nav.name}</NavLink>
									</NavItem>
								))
							}
							<NavItem className='App-nav-item col-6'>
								<a href='/admin' className='App-nav-link-button btn btn-md btn-outline-primary'>Area Clientes</a>
							</NavItem>
						</Nav>

					</Collapse>
				</Container>
			</Navbar>
		);
	}
}