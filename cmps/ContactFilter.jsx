import { Component } from "react";

export class ContactFilter extends Component {
  state = {
    term: "",
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter({ ...this.state });
    });
  };

  render() {
    const { term } = this.state;
    return (
      <form className="contact-filter">
        <section>
          {/* <label htmlFor="term">Search</label> */}
          <input
            placeholder="Search for a contact"
            value={term}
            onChange={this.handleChange}
            type="text"
            name="term"
            id="term"
          />
        </section>
      </form>
    );
  }
}
