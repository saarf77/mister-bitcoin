import React, { Component } from "react"
import { MarketPrice } from "../cmps/Market-price"
import { ConfirmedTransactions } from "../cmps/Confirmed-transactions"


export class StatisticPage extends Component {


  render() {
    return (
      <div className="chart-container statistics-page"> 
        <div className="chart">
          <MarketPrice className="market-price" />
        </div>
        <div className="chart">
          <ConfirmedTransactions className="confirmed-transactions" />
        </div>
      </div>
    )
  }
}

