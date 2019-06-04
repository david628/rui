let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { type: "", user } : {};
export default (state = initialState, action) => {
  switch(action.type) {
    case "param":
      return {
        user: action.user
      };
    default :
      return state;
  }
}