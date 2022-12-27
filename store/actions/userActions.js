import { userService } from "../../services/userService";

export function loadUser() {
  return (dispatch, getState) => {
    const loggedInUser = userService.getUser();
    console.log(loggedInUser);
    dispatch({ type: "SET_USER", loggedInUser });
  };
}

export function setUser(username) {
  return (dispatch, getState) => {
    const loggedInUser = userService.setUser(username);
    console.log(loggedInUser);
    dispatch({ type: "SET_USER", loggedInUser });
  };
}

export function transferFund(amount, contact) {
  console.log(amount, contact);
  return (dispatch, getState) => {
    var { username, coins, moves } = userService.getUser();
    coins -= amount;
    moves.unshift({ amount, contact });
    const loggedInUser = userService.setUser(username, coins, moves);
    console.log(loggedInUser);
    dispatch({ type: "SET_USER", loggedInUser });
  };
}
