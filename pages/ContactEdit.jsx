import { Component } from "react";
import { contactService } from "../services/contactService";
import { Link } from "react-router-dom";

export class ContactEdit extends Component {
  state = {
    contact: null,
  };

  async componentDidMount() {
    this.loadContacts();
  }

  async loadContacts() {
    const contactId = this.props.match.params.id;
    const contact = contactId
      ? await contactService.getContactById(contactId)
      : contactService.getEmptyContact();
    this.setState({ contact });
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({
      contact: { ...prevState.contact, [field]: value },
    }));
  };

  onSaveContact = async (ev) => {
    ev.preventDefault();
    await contactService.saveContact({ ...this.state.contact });
    this.props.history.push("/contact");
  };

  render() {
    const { contact } = this.state;
    if (!contact) return <div> Loading...</div>;

    return (
      <section>
        <h1 className="edit-header">{contact._id ? "Edit" : "Add"}</h1>
        {/* <pre>{JSON.stringify(contact)}</pre> */}
        <form onSubmit={this.onSaveContact} className="contact-edit">
          <section>
            <label htmlFor="name">Name </label>
            <input
              value={contact.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              id="name"
            />
            <label htmlFor="phone">Phone</label>
            <input
              value={contact.phone}
              onChange={this.handleChange}
              type="text"
              name="phone"
              id="phone"
            />
            <label htmlFor="email">Email</label>
            <input
              value={contact.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              id="email"
            />
            <button>SAVE</button>
            <Link to={`/contact/`} className="action-btn">
              Back
            </Link>
          </section>
        </form>
      </section>
    );
  }
}
