import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../css/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Header />
						<Main />
						<Footer />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;