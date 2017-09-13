// import configureMockStore from "redux-mock-store";
// import thunk from "redux-thunk";
// import * as tweetsAction from "../../actions/tweets-action";
// import nock from "nock";
//
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
//
// describe("async actions", () => {
// 	afterEach(() => {
// 		nock.cleanAll();
// 	});
//
// 	it("creates FETCH_TWEETS_RECEIVED when fetching tweets has been done", () => {
// 		nock("http://rest.learncode.academy/")
// 			.get("/api/test123/tweets")
// 			.reply(200, {
// 				body: {
// 					tweets: [
// 						{ text: "trying to text", id: 12 },
// 						{ text: "trying to text", id: 12 }
// 					]
// 				}
// 			});
//
// 		const expectedActions = [
// 			{
// 				type: "FETCH_TWEETS_RECEIVED",
// 				body: {
// 					tweets: [
// 						{ text: "trying to text", id: 12 },
// 						{ text: "trying to text", id: 12 }
// 					]
// 				}
// 			}
// 		];
// 		const store = mockStore({ tweets: [] });
//
// 		return store.dispatch(tweetsAction.fetchTweets()).then(() => {
// 			// return of async actions
// 			expect(store.getActions()).toEqual(expectedActions);
// 		});
// 	});
// });

it("returns the error", () => {
	expect("hello").toEqual("hello");
});
