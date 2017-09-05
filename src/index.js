import {combineReducers,createStore} from 'redux';
const userReducer=(state={},action)=>{
  switch(action.type){
case "NAME":
state={...state,name:action.payload};
break;
case "AGE":
state={...state,age:action.payload};
break;
default:
return state;
  }
return state;
};
const tweetsReducer=(state=[],action)=>{
return state;
};
const reducer=combineReducers({
user:userReducer,
tweets:tweetsReducer
});

const store =createStore(reducer);
store.subscribe(()=>{
  console.log("Store changed",store.getState());
});
store.dispatch({type:"NAME",payload:"Will"});
store.dispatch({type:"AGE",payload:35});
