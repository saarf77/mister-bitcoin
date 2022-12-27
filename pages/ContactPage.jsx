import { Component } from "react";
import { contactService } from "../services/contactService";
import { ContactList } from "../cmps/ContactList";
import { ContactFilter } from "../cmps/ContactFilter";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadContacts,
  removeContact,
  setFilterBy,
} from "../store/actions/contactActions";

export class _ContactPage extends Component {
  async componentDidMount() {
    this.props.loadContacts();
  }

  onRemoveContact = async (contactId) => {
    await this.props.removeContact(contactId);
  };

  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy);
    this.props.loadContacts();
  };

  render() {
    const { contacts } = this.props;
    if (!contacts) return <div>Loading...</div>;
    return (
      <section className="contact-page">
        <Link to={`/contact/edit`}>
        <button className="add-contact-btn">
        Add Contact
        </button>
          
        </Link>
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        <ContactList
          contacts={contacts}
          onRemoveContact={this.onRemoveContact}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contactModule.contacts,
  };
};

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
};

export const ContactPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactPage);
