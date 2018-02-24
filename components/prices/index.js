import React from 'react';

import PropTypes from 'prop-types'; // 15.6.0

import PriceScreenOne from './one';
import PriceScreenTwo from './two';

export const priceCardTypes = {
  ScreenOne: 'ScreenOne',
  ScreenTwo: 'ScreenTwo',
};

class Prices extends React.Component {
  render() {
    const { type } = this.props;
    let prices = <PriceScreenOne />;
    if (type === priceCardTypes.ScreenTwo) {
      prices = <PriceScreenTwo />;
    }
    return prices;
  }
}

Prices.propTypes = {
  type: PropTypes.oneOf([priceCardTypes.ScreenOne, priceCardTypes.ScreenTwo])
    .isRequired,
};

export default Prices;
