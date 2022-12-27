import { Component } from "react";
import { userService } from "../services/userService";
import { bitcoinService } from "../services/bitcoinService";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "../store/actions/userActions";

export class _Home extends Component {
  state = {
    rate: null,
  };

  async componentDidMount() {
    await this.props.loadUser();
    console.log("monted", this.props.loggedInUser);
    await this.loadRate();
    if (!this.props.loggedInUser) this.props.history.push("/signup");
  }

  async loadRate() {
    try {
      const rate = await bitcoinService.getRate1("USD");
      console.log(rate);
      this.setState({ rate });
    } catch (err) {
      console.log("err:", err);
    }
  }

  render() {
    const { rate } = this.state;
    const { loggedInUser } = this.props;
    console.log(loggedInUser);
    if (!loggedInUser) return <div>Loading...</div>;
    const transactions = !loggedInUser.moves.length ? (
      <p>No transcations yet...</p>
    ) : (
      loggedInUser.moves.map((move) => (
        <ul>
          <li>
            Transfer to : {move.contact} | Amount : {move.amount}
          </li>
        </ul>
      ))
    );

    return (
      <section className="home">
        <img src={`https://robohash.org/123`} alt="" />
        <section>
          <h3>
            Name: <span>{loggedInUser.username}</span>
          </h3>
        </section>
        <section>
          <h3>
            Coins Balance: <span>{loggedInUser.coins}</span>
          </h3>
        </section>
        <section>
          <h3>
            Bitcoin rate : <span> {rate} </span>
          </h3>
        </section>
        <h3 class="transactions">My Transactions:</h3>
        {transactions}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userModule.loggedInUser,
  };
};

const mapDispatchToProps = {
  loadUser,
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);
