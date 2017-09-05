export default function reducer(
	state = {
		users: {
			id: null,
			name: null,
			age: null
		},
		fetching: false,
		fetched: false,
		error: null
	},
	action
) {
	switch (action.type) {
		case "FETCH_USER_START":
			return { ...state, fetching: true };
		case "FETCH_USERS_ERROR":
			return { ...state, fetching: false, error: action.payload };
		case "FETCH_USER_RECEIVED":
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
