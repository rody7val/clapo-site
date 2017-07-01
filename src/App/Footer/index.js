import React from 'react';
// imagenes
import link from '../../img/link.svg';
import home from '../../img/home.svg';
import phone from '../../img/phone.svg';
import email from '../../img/email.svg';
// estilos
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/Footer.css';
//componentes
import { Container, Row, Col } from 'reactstrap';

class Footer extends React.Component {

	render() {

		let ulStyle = {
			"list-style-image": "url(" + link + ")"
		};

		return (
			<footer className='App-footer'>
				<Container>
					<Row>
						<Col className='footer-col-sapace' xs={12} sm={12} md={4} lg={4}>
							<h5>ACERCA DE NOSOTROS</h5>
							<p className='lead'>
								<small >Lorem ipsum dolor sin amor, consocictur adipiscing, sod do giusmod tempor. Lorem ipsum dolor sin amor, consocictur adipiscing, sod do giusmod tempor. Lorem ipsum dolor sin amor, consocictur adipiscing, sod do giusmod tempor.</small>
							</p>
						</Col>

						<Col className='footer-col-sapace' xs={12} sm={12} md={4} lg={4}>
							<h5>ENLACES EXTERNOS</h5>
							<ul className='ul-footer' style={ulStyle}>
								<li>
									<a className='link-footer' href='/guardia'>GUARDIA C.L.A.Po</a>
								</li>
								<li>
									<a className='link-footer' href='/reclamos'>RECLAMOS</a>
								</li>
								<li>
									<a className='link-footer' href='/consultas'>CONSULTAS</a>
								</li>
								<li>
									<a className='link-footer' href='/reclamos-canal'>RECLAMOS CANAL</a>
								</li>
								<li>
									<a className='link-footer' href='/internet'>INTERNET</a>
								</li>
							</ul>
						</Col>

						<Col className='footer-col-sapace' xs={12} sm={12} md={4} lg={4}>
							<h5>ESTAMOS EN CONTACTO</h5>
							<Container>
								<Row className='footer-row-sapace'>
									<dt>
										<img className='img-fluid' src={home} alt='home.svg'/>
									</dt>
									<dd>
										<p><small>Cortazar 1163,</small></p>
										<p><small>Chillar / Bs. As. (7311)</small></p>
									</dd>
								</Row>

								<Row className='footer-row-sapace'>
									<dt>
										<img className='img-fluid' src={phone} alt='phone.svg'/>
									</dt>
									<dd>
										<p><small>02281 - 497120 - Canal</small></p>
										<p><small>02281 - 497288 - C.L.A.Po.</small></p>
									</dd>
								</Row>

								<Row className='footer-row-sapace'>
									<dt>
										<img className='img-fluid' src={email} alt='email.svg'/>
									</dt>
									<dd>
										<p><small>clapotable@clapo.com.ar</small></p>
									</dd>
								</Row>
							</Container>
						</Col>

					</Row>
				</Container>
			</footer>
		);
	}
}

export default Footer;