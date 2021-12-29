import React, { Component } from 'react';
import { userService } from '../services/userService.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transferCoins } from '../store/actions/userActions';
import { connect } from 'react-redux';

class _ContactDetails extends Component {
  state = {
    contact: null,
    coinsToTransfer: '',
    isTransfer: false,
  };

  async componentDidMount() {
    const contact = await userService.getContactById(this.props.match.params.id);
    this.setState({ contact });
  }

  handleChange = ({ target }) => {
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState({ coinsToTransfer: value });
  };

  onTransferCoins = async (ev) => {
    ev.preventDefault();
    console.log('transfering...');
    await this.props.transferCoins(this.state.coinsToTransfer, this.state.contact);
    this.props.history.push('/');
  };

  toggleTransfer = () => {
    this.setState((prevState) => ({
      isTransfer: !prevState.isTransfer,
    }));
  };

  render() {
    const { contact, coinsToTransfer, isTransfer } = this.state;
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
              <form onSubmit={this.onTransferCoins} className="transfer-coin form-design flex column gap ">
                {isTransfer && <input ref={this.inputRef} onChange={this.handleChange} value={coinsToTransfer} type="text" name="name" id="name" placeholder="Amount" />}
                {isTransfer && <button className="submit-btn">Transfer</button>}
              </form>
              {!isTransfer && (
                <button className="submit-btn" onClick={this.toggleTransfer}>
                  Transfer Coins
                </button>
              )}
              {isTransfer && (
                <button className="submit-btn" onClick={this.toggleTransfer}>
                  Cancel
                </button>
              )}
            </div>
          </div>
        )}
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
  transferCoins,
};

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails);
