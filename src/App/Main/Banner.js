import React from 'react';
import firebase from 'firebase';
import { Container } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import '../../css/Banner.css'

class Banner extends React.Component {
  constructor () {
    super();
    this.state = {
      banners: []
    };
  }

  componentDidMount() {
		firebase.database().ref('banners').on('child_added', (snapshot) => {
			const banner = snapshot.val();
			banner.key = snapshot.getKey();

			this.setState({
				banners: this.state.banners.concat(banner)
			});
		});
  }

	render() {	
		return (
			<div>
				<Carousel showThumbs={false} emulateTouch useKeyboardArrows>
					{ this.state.banners.length ? this.state.banners.map( (banner, index) => (
						<div >
							<img src={banner.image} alt={banner.name}/>
							<p>Descripción de la imagen. <a href='/h#internet'>Ir al Blog</a></p>
						</div>
					) ) : (
						<p>Cargando ....</p>
					)}
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

export default Banner;

