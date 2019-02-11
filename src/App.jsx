import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './App.css';
import HomeView from './HomeView/HomeView.jsx';
import ControlledInputView from './ControlledInputView/ControlledInputView.jsx'
import NestedView from './NestedView/NestedView.jsx';
import AxiosView from './AxiosView/AxiosView.jsx';
import ReduxView from './ReduxView/ReduxView.jsx';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-2">
						<NavLink exact to="/" className="navbar-brand">Pat's React Examples</NavLink>
						<ul className="navbar-nav mr-auto" >
							<li className="nav-item"> <NavLink exact to="/" className="nav-link"> Home </NavLink> </li>
							<li className="nav-item"> <NavLink to="/controlled-input" className="nav-link"> Controlled-Input </NavLink> </li>
							<li className="nav-item"> <NavLink to="/nested" className="nav-link"> Nested </NavLink> </li>
							<li className="nav-item"> <NavLink to="/axios" className="nav-link"> Axios </NavLink> </li>
							<li className="nav-item"> <NavLink to="/redux" className="nav-link"> Redux </NavLink> </li>
						</ul>
					</nav>
					<div className="container-fluid">
						<Route exact path="/" component={HomeView} />
						<Route path="/controlled-input" component={ControlledInputView} />
						<Route path="/nested" component={NestedView} />
						<Route path="/axios" component={AxiosView} />
						<Route path="/redux" component={ReduxView} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
