import { combineReducers } from 'redux';
//import { app } from './app.reducer';
import login from './login.reducer';
//import authentication from './authentication.reducer';
//import { app2 } from './app2.reducer';
const globalReducers = combineReducers({
  //app,
  login,
  //authentication
  //app2
});
/*(state={"count": 0}, action={}) => {
  console.log(action.type);
  switch(action.type) {
    case "changeCount":
      return {
        count: action.data
      };
      //let _state = state;
      //return Object.assign({}, state, _state);
    default :
      //return Object.assign({}, state);
      return state;
  }
},*/
export default globalReducers;