import { Component } from "react";
import { contactService } from "../services/contactService";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { TransferFund } from "../cmps/TransferFund.jsx";
import { loadCurrContact } from "../store/actions/contactActions";

export class _ContactDetails extends Component {
  async componentDidMount() {
    const contactId = this.props.match.params.id;
    this.props.loadCurrContact(contactId);
  }

  render() {
    const contact = this.props.currContact;
    if (!contact) return <div>Loading...</div>;
    return (
      <div className="contact-details">
        {/* <img src={`https://randomuser.me/api.jpg${contact._id}`} alt="" /> */}
        <img src={`https://robohash.org/set_set5/${contact._id}`} alt="" />
        <h2>{contact.name}</h2>
        <h4>{contact.email}</h4>
        <h4>{contact.phone}</h4>

        <div className="action-btns">
          <Link to={`/contact/edit/${contact._id}`} className="action-btn">
            Edit Contact
          </Link>
          <Link to={`/contact/`} className="action-btn">
            Back to Contacts
          </Link>
          <Link to={`/`} className="action-btn">
            Home
          </Link>
        </div>
        <TransferFund contact={contact.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currContact: state.contactModule.currContact,
  };
};

const mapDispatchToProps = {
  loadCurrContact,
};

export const ContactDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactDetails);
