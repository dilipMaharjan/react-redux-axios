export function fetchUser() {
	return {
		type: "FETCH_USER_RECEIVED",
		payload: {
			name: "Will",
			age: 35
		}
	};
}
export function setUserName(name) {}
return {
	type: "SET_USER_NAME",
	payload: name
};
export function seUserAge(age) {}
return {
	type: "SET_USER_AGE",
	payload: age
};
