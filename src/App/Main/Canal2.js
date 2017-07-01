import React from 'react';
import { Container, Card, CardTitle, CardText, Row, Col } from 'reactstrap';

class Canal2 extends React.Component {

	render() {	
		return (
			<section className='big-triangle triangle-gray white-section'>
				<Container>
					<h1>Canal 2</h1>
					<br />
					<Row>
    				  <Col sm="6">
    				    <Card block>
    				      <CardTitle>Ultimas Noticias</CardTitle>
    				      <CardText>Carta con texto de apoyo, como una introducción al contenido.</CardText>
    				      <a href='/blog' className='btn btn-outline-success'>Ver Noticias</a>
    				    </Card>
    				  </Col>
    				  <Col sm="6">
    				    <Card block>
    				      <CardTitle>Video Streaming</CardTitle>
    				      <CardText>Carta con texto de apoyo, como una introducción al contenido.</CardText>
    				      <a href='/canal/streaming' className='btn btn-outline-warning'>Leer más</a>
    				    </Card>
    				  </Col>
    				</Row>
				</Container>
			</section>
		);
	}
}

export default Canal2;
