import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Home from './containers/Home';

const mapStateToProps = function (state, props) {
	return {}
}

const mapDispatchToProps = dispatch => ({});

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" name="Home" render={props => <Home {...props}/>}/>
				</Switch>
			</Router>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
