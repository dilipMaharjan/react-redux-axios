import axios from "axios";

export function fetchTweets() {
	return function(dispatch) {
		return axios
			.get("http://rest.learncode.academy/api/test123/tweets")
			.then(response => {
				dispatch({
					type: "FETCH_TWEETS_RECEIVED",
					payload: response.data
				});
			})
			.catch(err => {
				dispatch({ type: "FETCH_TWEETS_ERROR", payload: err });
			});
	};
}
