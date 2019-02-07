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
					<h1> React Examples by Patrick Brown </h1>
					<ul className="menu" >
						<li> <NavLink exact to="/"> Home </NavLink> </li>
						<li> <NavLink to="/controlled-input" > Controlled-Input </NavLink> </li>
						<li> <NavLink to="/nested" > Nested </NavLink> </li>
						<li> <NavLink to="/axios" > Axios </NavLink> </li>
						<li> <NavLink to="/redux" > Redux </NavLink> </li>
					</ul>
					<div>
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
