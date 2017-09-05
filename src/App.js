import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { fetchUser } from "./js/actions/user-action";
class App extends Component {
	componentWillMount() {
		this.props.dispatch(fetchUser());
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">{console.log(this.props)}</p>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		user: state.user.users,
		tweets: state.tweets.tweets
	};
}
export default connect(mapStateToProps)(App);
