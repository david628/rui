export function app2(state={"count": 0}, action={}) {
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
}