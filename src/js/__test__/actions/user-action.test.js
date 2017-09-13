import * as userAction from "../../actions/user-action";
it("user data is fetched", () => {
	const expected = {
		type: "FETCH_USER_RECEIVED",
		payload: {
			name: "Will",
			age: 35
		}
	};
	expect(userAction.fetchUser()).toEqual(expected);
});

it("user name is set", () => {
	const expected = {
		type: "SET_USER_NAME",
		payload: "dilip"
	};
	expect(userAction.setUserName("dilip")).toEqual(expected);
});

it("user age is set", () => {
	const expected = {
		type: "SET_USER_AGE",
		payload: 34
	};
	expect(userAction.setUserAge(34)).toEqual(expected);
});
