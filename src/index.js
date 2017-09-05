import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
const initialState={
  fetching:false,
  fetched:false,
  users:[],
  error:null,
};
const reducer=(state=initialState,action)=>{
  switch(action.type){
case "FETCH_USER_START":
return ({...state,fetching:true});
case "FETCH_USERS_ERROR":
return ({...state,fetching:false,error:action.payload});
case "RECEIVE_USERS":
return ({...state,fetching:false,fetched:true,users:action.payload});
  }
return state;
};

const middleware=applyMiddleware(thunk,logger);
const store =createStore(reducer,middleware);
store.subscribe(()=>{
  console.log("Store changed",store.getState());
});
store.dispatch((dispatch)=>{
  dispatch({type:"FETCH_START_USER"});
  axios.get("http://rest.learncode.academy/api/wstern/users")
  .then((response)=>{
    dispatch({type:"RECEIVE_USERS",payload:response.data})
  })
    .catch((error)=>{
      dispatch({type:"FETCH_USERS_ERROR",payload:error})

  })
});
