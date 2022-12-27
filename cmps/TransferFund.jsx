import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { transferFund } from "../store/actions/userActions";

export class _TransferFund extends Component {
  onTrasferFund = (ev) => {
    ev.preventDefault();
    const amount = +ev.target[0].value;
    this.props.transferFund(amount, this.props.contact);
  };

  render() {
    let { loggedInUser } = this.props;
    const { contact } = this.props;
    let moves = loggedInUser.moves.filter((move) => move.contact === contact);

    return (
      <section className="transfer-fund">
        <h1>Transfer Fund</h1>
        <form onSubmit={this.onTrasferFund}>
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="amount" />
          <button>Transfer</button>
        </form>
        <div className="transactions">
          <h3>Transactions:</h3>
          <ul>
            {moves.map((move) => (
              <li>Transfer Amount: {move.amount}</li>
            ))}
          </ul>
        </div>
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
  transferFund,
};

export const TransferFund = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TransferFund);
