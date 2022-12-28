import { utilService } from "./utilService";

export const userService = {
  getUser,
  setUser,
  updateBalance
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
function updateBalance(val,to) {
  let user = getUser()
  let userBalance = JSON.parse(JSON.stringify(user.coins))
  if (userBalance - val <= 0) return false

  user.coins = user.coins - val
  let move = {
    'At': new Date(Date.now()).toLocaleDateString(),
    'Amount': val ,
   to,
  }
  user.moves.unshift(move)
  utilService.store(KEY, user)
  return true
}
