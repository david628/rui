import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import globalReducers from '../reducers';
const loggerMiddleware = createLogger();
export const store = createStore(
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
  globalReducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);