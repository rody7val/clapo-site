import React from 'react';
import { Container } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';

class Home extends React.Component {

	render() {	
		return (
			<div>
				<Carousel width='100%' showThumbs={false} emulateTouch useKeyboardArrows>
					<div>
						<img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=1024%C3%97310&w=1024&h=310" alt=''/>
						<p>Descripción de la imagen. <a href='/h#internet'>Ir al Blog</a></p>
					</div>
					<div>
						<img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=1024%C3%97310&w=1024&h=310" alt=''/>
						<p>Descripción de ejemplo. <a href='/i#internet'>Leer más</a></p>
					</div>
					<div>
						<img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=1024%C3%97310&w=1024&h=310" alt=''/>
						<p>Descripción de la imagen. <a href='/j#internet'>Ir al Blog</a></p>
					</div>
					<div>
						<img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=1024%C3%97310&w=1024&h=310" alt=''/>
						<p>Descripción de ejemplo. <a href='/k#internet'>Leer más</a></p>
					</div>
				</Carousel>
				<section className='big-triangle triangle-white first-section'>
					<Container>
						<h1>Servicios esenciales para una localidad en crecimiento</h1>
						<p className='lead'>El crecimiento de una sociedad depende de la cooperación de sus actores pricipales</p>
					</Container>
				</section>
			</div>
		);
	}
}

export default Home;

