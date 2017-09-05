export default function reducer(
	state = {
		tweets: [],
		fetching: false,
		fetched: false,
		error: null
	},
	action
) {
	switch (action.type) {
		case "FETCH_TWEETS":
			return { ...state, fetching: true };
		case "FETCH_TWEETS_ERROR":
			return { ...state, fetching: false, error: action.payload };
		case "FETCH_TWEETS_RECEIVED":
			return {
				...state,
				fetching: false,
				fetched: true,
				users: action.payload
			};
		default:
			return state;
	}
}
