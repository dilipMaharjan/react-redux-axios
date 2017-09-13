import reducer from "../../reducers/user-reducer";

it("returns the initial state", () => {
	expect(reducer(undefined, {})).toEqual({
		users: {
			id: null,
			name: null,
			age: null
		},
		fetching: false,
		fetched: false,
		error: null
	});
});
it("returns the initial state", () => {
	expect(reducer(undefined, {})).toEqual({
		users: {
			id: null,
			name: null,
			age: null
		},
		fetching: false,
		fetched: false,
		error: null
	});
});

it("returns the fetching true", () => {
	expect(reducer({}, { type: "FETCH_USER_START" })).toEqual({
		fetching: true
	});
});

it("returns the error", () => {
	expect(reducer({}, { type: "FETCH_USERS_ERROR" })).toEqual({
		fetching: false
	});
});

it("returns the error", () => {
	expect(
		reducer(
			{},
			{ type: "FETCH_USER_RECEIVED", payload: { name: "Will", age: 35 } }
		)
	).toEqual({
		fetching: false,
		fetched: true,
		users: { age: 35, name: "Will" }
	});
});
