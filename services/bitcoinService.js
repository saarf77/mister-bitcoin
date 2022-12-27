// import axios from "axios";
// import { utilService } from "./utilService.js";
// import market from "./../data/market.json";


// const MARKET_PRICE_KEY = "marketPriceDB";
// const TRANSACTION_KEY = "transactionDB";

const axios = require("axios").default

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
  getRate1
}


async function getRate(coins) {
  let btc = null
  await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`).then((res) => (btc = res.data))
  return btc
  //  return btc
}

async function getRate1(coin) {
  try {
    console.log("Getting rate data", coin);
    return axios
      .get(`https://blockchain.info/tobtc?currency=${coin}&value=1`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  } catch (err) {
    console.log("cannot get rate", err);
  }
}



async function getMarketPrice(timePeriod = '10') {
  //   console.log("getMarketPrice")
  let marketPrices = null
  await axios
    .get(`https://api.blockchain.info/charts/market-price?timespan=${timePeriod}months&format=json&cors=true`)
    .then((res) => (marketPrices = res.data))
  //  console.log(marketPrices);

  return marketPrices
}

// function getMarketPrice() {
//   try {
//     console.log("Getting market price");
//     return axios
//       .get(
//         `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
//       )
//       .then((res) => {
//         console.log(res.data);
//         const values = res.data.values;
//         return values.map((value) => value.y);
//       });
//   } catch (err) {
//     console.log("cannot get rate", err);
//   }
// }



async function getConfirmedTransactions(timePeriod = '10') {
  // console.log('ConfirmedTransactions');
  let ConfirmedTransactions = null
  await axios
    .get(`https://api.blockchain.info/charts/trade-volume?timespan=${timePeriod}months&format=json&cors=true`)
    .then((res) => (ConfirmedTransactions = res.data))

  return ConfirmedTransactions

}

// function getConfirmedTransactions(timePeriod='10') {
//   let ConfirmedTransactions = null
//   try {
//     return axios
//     .get(`https://api.blockchain.info/charts/trade-volume?timespan=${timePeriod}months&format=json&cors=true`)

//       .then((res) => { ConfirmedTransactions = res.data});
//   } catch (err) {
//     console.log("cannot get rate", err);
//   }
//   return ConfirmedTransactions

// }