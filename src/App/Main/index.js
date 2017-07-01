import React from 'react';
// estilos
import 'bootstrap/dist/css/bootstrap.css';
import 'react-responsive-carousel/lib/styles/carousel.css'
import '../../css/Main.css';
// componentes
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
// custom component
import Home from './Home';
import Cloacas from './Cloacas';
import Internet from './Internet';
import Canal2 from './Canal2';
import Agua from './Agua';
import Contacto from './Contacto';

class Main extends React.Component {

	// Cuando se renderiza App en el DOM
	componentWillMount () {
		configureAnchors({offset: -84, scrollDuration: 800})
	}

	render() {
		
		return (
			<div className='App-main'>
				<ScrollableAnchor id={'home'}>
					<Home />
				</ScrollableAnchor>

				<ScrollableAnchor id={'cloacas'}>
					<Cloacas />
				</ScrollableAnchor>

				<ScrollableAnchor id={'internet'}>
					<Internet />
				</ScrollableAnchor>

				<ScrollableAnchor id={'canal2'}>
					<Canal2 />
				</ScrollableAnchor>

				<ScrollableAnchor id={'agua'}>
					<Agua />
				</ScrollableAnchor>

				<ScrollableAnchor id={'contacto'}>
					<Contacto />
				</ScrollableAnchor>

			</div>
		);
	}
}

export default Main;