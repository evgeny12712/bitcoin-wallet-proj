import React, { Component } from 'react';
import { getUser } from '../services/userService.js';
import { getData } from '../services/bitcoinService';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class HomePage extends Component {
  state = {
    user: getUser(),
    bitcoinRate: null,
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({ user });
    await this.loadBitcoinRate(this.state.user.coins);
  }

  async loadBitcoinRate(coins) {
    const rate = await getData('bitcoinRate');
    const bitcoinRate = rate * coins;
    this.setState({ bitcoinRate });
  }

  render() {
    let { user, bitcoinRate } = this.state;
    return (
      <section className="home-page flex column align-center m20">
        <h1>
          <span>Hello </span>
          {user.name} !
        </h1>
        <h3>
          <span>Coins : </span>
          {user.coins}
        </h3>
        {this.state.bitcoinRate && (
          <h3>
            <span>BTC : </span>
            {bitcoinRate}
          </h3>
        )}
      </section>
    );
  }
}
