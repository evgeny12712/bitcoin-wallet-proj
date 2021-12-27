import React, { Component } from 'react';
import { contactService } from '../services/contactService.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ContactDetails extends Component {
  state = {
    contact: null,
  };

  async componentDidMount() {
    const contact = await contactService.getContactById(this.props.match.params.id);
    console.log(contact);
    this.setState({ contact });
  }

  render() {
    const { contact } = this.state;
    return (
      <section className="container">
        {contact && (
          <div className="contact-details-container flex column align-center">
            <div className="links-wrapper flex space-between">
              <Link to={'/contacts'} className="info">
                <FontAwesomeIcon icon="arrow-circle-left" className="navigate-link-icon" />
              </Link>
              <Link to={`/contact/edit/${contact._id}`} className="info">
                <FontAwesomeIcon icon="user-edit" className="navigate-link-icon" />
              </Link>
            </div>
            <img src={`https://robohash.org/${contact._id}`} alt="" />
            <div className="details-wrapper flex column gap m20">
              <h3>
                <span>Name : </span>
                {contact.name}
              </h3>
              <h3>
                <span>Email : </span>
                {contact.email}
              </h3>
              <h3>
                <span>Phone : </span>
                {contact.phone}
              </h3>
            </div>
          </div>
        )}
      </section>
    );
  }
}
