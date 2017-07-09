import React from 'react';
import top from '../../img/top.png';
// estilos
import 'bootstrap/dist/css/bootstrap.css';
import 'react-responsive-carousel/lib/styles/carousel.css'
import '../../css/Main.css';
// componentes
import { Route } from 'react-router-dom';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
// custom component
import Banner from './Banner';
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
				<ScrollableAnchor id={'banner'}>
					<Banner />
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

				<Route path='/' render={() => (
					<span id='top'>
						<a href='#banner' title='Volver arriba.'>
							<img className='img-fluid' src={top} alt='back-to-top'/>
						</a>
					</span>
				)}/>

			</div>
		);
	}
}

export default Main;