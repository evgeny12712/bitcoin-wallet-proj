import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ContactList } from '../cmps/ContactList';
import { ContactFilter } from '../cmps/ContactFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getLoggedinUser, setFilterBy, loadContacts } from '../store/actions/userActions';

class _ContactPage extends Component {
  async componentDidMount() {
    this.props.loadContacts();
  }

  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy);
    this.props.loadContacts();
  };

  render() {
    let { contacts } = this.props;
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
    contacts: state.userModule.contacts,
  };
};

const mapDispatchToProps = {
  setFilterBy,
  getLoggedinUser,
  loadContacts,
};

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage);
