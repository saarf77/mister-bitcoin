import { utilService } from "./utilService";

export const userService = {
  getUser,
  setUser,
};

const KEY = "loggedInUser_DB";

function getUser() {
  return utilService.loadFromStorage(KEY);
}

function setUser(username, coins = 100, moves = []) {
  const user = {
    username,
    coins,
    moves,
  };
  utilService.save(KEY, user);
  return user;
}
