import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { contactService } from '../services/contactService.js';
import { ContactList } from '../cmps/ContactList';
import { ContactFilter } from '../cmps/ContactFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ContactPage extends Component {
  state = {
    contacts: null,
    filterBy: null,
  };

  async componentDidMount() {
    this.loadContacts();
  }

  async loadContacts() {
    const { filterBy } = this.state;
    const contacts = await contactService.getContacts(filterBy);
    this.setState({ contacts });
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts);
  };

  render() {
    const { contacts } = this.state;
    return (
      <section className="contact-page container flex column text-center gap">
        <Link className="add-contact-link" to="/contact/edit">
          <FontAwesomeIcon icon="user-plus" />
          <span>Add Contact</span>
        </Link>
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        {contacts && <ContactList contacts={contacts} />}
      </section>
    );
  }
}
