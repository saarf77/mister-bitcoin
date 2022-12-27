import React, { Component } from "react"
import { Line } from "react-chartjs-2"
import { bitcoinService } from "../services/bitcoinService"
import Chart from "chart.js/auto"

export class ConfirmedTransactions extends Component {
  state = {
    dailyTransitons: null,
    timePeriod: "1",
  }

  componentDidMount() {
    this.loaddDailyTransitons()
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ timePeriod: e.target.value })
    console.log(this.state.timePeriod)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.timePeriod !== this.state.timePeriod) {
      this.loaddDailyTransitons()
    }
  }

  async loaddDailyTransitons() {
    try {
      let updatedDailyTransitons = await bitcoinService.getConfirmedTransactions(this.state.timePeriod)
      let xVals
      xVals = updatedDailyTransitons.values.map((val) => new Date(val.x * 1000).toLocaleDateString())
      //   console.log(updatedMarketPrice.values.filter(val=>val.y));
      let newData = {
        labels: xVals,
        datasets: [
          {
            label: `BTC Transitions Volume -  ${this.state.timePeriod} Months`,
            data: updatedDailyTransitons.values.filter((val) => val.y),
            fill: true,
            // backgroundColor: "#FFB703",
            // borderColor: "#FB8500",
            backgroundColor: "#fff1d0",
            borderColor: "#ffd166",
          },
        ],
      }
      // console.log(newData);
      this.setState({ dailyTransitons: newData })
    } catch (err) {
      console.log("err:", err)
    }
  }

  render() {
    const { dailyTransitons, timePeriod } = this.state
    if (!dailyTransitons) return <span>Loading</span>
    return (
      <div className="confirmed-transitons">
        <select name='timePeriod'  value={timePeriod} onChange={this.handleChange}>
          <option value='1'>1 Months</option>
          <option value='3'>3 Months</option>
          <option value='6'>6 Months</option>
          <option value='12'>12 Months</option>
          <option value='60'>5 years</option>
        </select>
        <Line data={dailyTransitons} />
      </div>
    )
  }
}
