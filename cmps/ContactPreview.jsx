import { Component } from "react";
import { Link } from "react-router-dom";

export function ContactPreview({ contact, onRemoveContact }) {
  const contactStyle = {
    backgroundImage: `url(https://robohash.org/set_set5/${contact._id})`,
  };
  return (
    <div style={contactStyle} className="contact-preview">
      <Link to={`/contact/${contact._id}`} className="preview">
        <h2>{contact.name}</h2>
      </Link>
      <section className="actions">
        <button
          className="action-btn"
          onClick={() => onRemoveContact(contact._id)}
        >
          DELETE
        </button>
        <Link to={`/contact/${contact._id}`} className="action-btn">
          Details
        </Link>
        <Link to={`/contact/edit/${contact._id}`} className="action-btn">
          Edit
        </Link>
      </section>
    </div>
  );
}
