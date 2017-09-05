import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchUser } from "./js/actions/user-action";
import { fetchTweets } from "./js/actions/tweets-action";
class App extends Component {
	componentWillMount() {
		this.props.dispatch(fetchUser());
	}
	getTweets() {
		this.props.dispatch(fetchTweets());
	}

	render() {
		const { tweets, user } = this.props;
		if (!tweets.length) {
			return <button onClick={this.getTweets.bind(this)}>Load Tweets</button>;
		}
		const mappedTweets = tweets.map((tweet, i) => {
			return <li key={i}>{tweet.text}</li>;
		});
		return (
			<div className="App">
				<h1>{user.name}</h1>
				<ol>{mappedTweets}</ol>
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
