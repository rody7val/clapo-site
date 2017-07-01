import React from 'react';
import { Container } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';

class Internet extends React.Component {

	render() {	
		return (
			<section className='big-triangle triangle-white gray-section'>
				<Container>
					<h1>Algunos de nuestros trabajos</h1>
					<p className='lead'>La Cooperativa ha ralizado emprendimientos tendientes a mejorar la calidad de vida de la población</p>
					<br />
					<Carousel showIndicators={false} emulateTouch useKeyboardArrows>
						<div>
							<img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=400%C3%97180&w=318&h=180" alt=''/>
							<p>Descripción de la imagen. <a href='/h#internet'>Ir al Blog</a></p>
						</div>
						<div>
							<img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=400%C3%97180&w=318&h=180" alt=''/>
							<p>Descripción de ejemplo. <a href='/i#internet'>Leer más</a></p>
						</div>
						<div>
							<img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=400%C3%97180&w=318&h=180" alt=''/>
							<p>Descripción de la imagen. <a href='/j#internet'>Ir al Blog</a></p>
						</div>
						<div>
							<img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt=''/>
							<p>Descripción de ejemplo. <a href='/k#internet'>Leer más</a></p>
						</div>
					</Carousel>
				</Container>
			</section>
		);
	}
}

export default Internet;
