import React, { Component } from 'react';
import { Chart } from '../cmps/Chart';
import { getData } from '../services/bitcoinService';
export class StatisticPage extends Component {
  state = {
    marketPriceData: null,
    tradeVolume: null,
  };

  async componentDidMount() {
    await this.loadMarketPrice();
    await this.loadTradeVolume();
    console.log(this.store.marketPriceData);
  }

  async loadMarketPrice() {
    const marketPriceData = await getData('marketPrice');
    this.setState({ marketPriceData });
  }

  async loadTradeVolume() {
    const tradeVolume = await getData('tradeVolume');
    this.setState({ tradeVolume });
  }

  getConfirmedTransactions;

  render() {
    const { marketPriceData, tradeVolume } = this.state;
    return (
      <section>
        {marketPriceData && <Chart data={marketPriceData} />}
        {/* {bitcoinRate && <Chart marketPriceData={bitcoinRate} />} */}
        {tradeVolume && <Chart data={tradeVolume} />}
      </section>
    );
  }
}
