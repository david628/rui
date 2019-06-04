export function app(state={type: "changeCount", count: 0}, action) {
  switch(action.type) {
    case "changeCount":
      return {
        type: 'changeCount',
        count: action.count
      };
      //let _state = state;
      //return Object.assign({}, state, _state);
    default :
      //return Object.assign({}, state);
      return state;
  }
}