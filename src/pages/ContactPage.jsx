import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ContactList } from '../cmps/ContactList';
import { ContactFilter } from '../cmps/ContactFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getLoggedinUser } from '../store/actions/userActions';

class _ContactPage extends Component {
  async componentDidMount() {
    await this.props.getLoggedinUser();
  }

  removeContact = (contactId) => {
    console.log('trye');
  };

  onChangeFilter = (filterBy) => {
    // this.props.setFilterBy(filterBy);
    // this.props.loadContacts();
  };

  render() {
    let contacts = [];
    if (this.props.loggedinUser) {
      contacts = this.props.loggedinUser.contacts;
    }
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

const mapStateToProps = (state) => {
  return {
    loggedinUser: state.userModule.loggedinUser,
  };
};

const mapDispatchToProps = {
  // setFilterBy,
  getLoggedinUser,
};

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage);
