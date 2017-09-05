import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">{console.log(this.props.user.users)}</p>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { user: state.user };
}
export default connect(mapStateToProps)(App);
