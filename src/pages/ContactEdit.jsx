import { Component, createRef } from 'react';
import { contactService } from '../services/contactService.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ContactEdit extends Component {
  state = {
    contact: null,
  };
  inputRef = createRef();

  async componentDidMount() {
    const contactId = this.props.match.params.id;
    const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact();
    this.setState({ contact }, () => this.inputRef.current.focus());
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }));
  };

  onSaveContact = async (ev) => {
    ev.preventDefault();
    await contactService.saveContact({ ...this.state.contact });
    this.props.history.push('/');
  };

  onDeleteContact = async () => {
    await contactService.deleteContact(this.state.contact._id);
    this.props.history.push('/contacts');
  };

  render() {
    const { contact } = this.state;
    return (
      <section className="container">
        {contact && (
          <div className="contact-edit-container flex column align-center">
            <div className="links-wrapper flex space-between">
              <Link to={'/contacts'} className="back-icon-wrapper flex align-center">
                <FontAwesomeIcon icon="arrow-circle-left" className="navigate-link-icon" />
              </Link>
              {contact._id && (
                <button onClick={this.onDeleteContact} className="info-button-delete">
                  <FontAwesomeIcon icon="trash" />
                </button>
              )}
            </div>

            <img src={`https://robohash.org/${contact._id}`} alt="" />
            <form onSubmit={this.onSaveContact} className="edit-form flex column gap ">
              <label htmlFor="name">Name</label>
              <input ref={this.inputRef} onChange={this.handleChange} value={contact.name} type="text" name="name" id="name" placeholder="Name" />
              <label htmlFor="email">Email</label>
              <input onChange={this.handleChange} value={contact.email} type="text" name="email" id="email" placeholder="Email" />
              <label htmlFor="phone">Phone</label>
              <input onChange={this.handleChange} value={contact.phone} type="text" name="phone" id="phone" placeholder="Phone number" />
              <button className="save-btn">Save</button>
            </form>
          </div>
        )}
      </section>
    );
  }
}
