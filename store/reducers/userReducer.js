const INITIAL_STATE = {
  loggedInUser: null,
};

export function userReducer(state = INITIAL_STATE, action) {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        loggedInUser: action.loggedInUser,
      };

    default:
      return state;
  }
}
