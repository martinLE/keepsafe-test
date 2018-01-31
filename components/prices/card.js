import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'; // Supported builtin module

import priceTypes from './types';
import colors from '../../themes/colors';
import style from './style.js';

class PriceCard extends React.Component {
  render() {
    const { type } = this.props;
    let color = colors.white;
    let price = '';
    switch (type) {
      case priceTypes.monthly:
        color = colors.keepSafeGreen;
        price = '$9.99';
        break;
      case priceTypes.yearly:
        color = colors.keepSafeBlue;
        price = '$1.99';
        break;
      case priceTypes.lifetime:
        color = colors.keepSafeYellow;
        price = '$149.99';
        break;
      default:
        break;
    }

    return (
      <TouchableOpacity style={style.card} onPress={() => {}}>
        <View
          style={[
            { backgroundColor: color, borderColor: color },
            style.cardHeader,
          ]}
        >
          <Text style={style.cardHeaderText}>{type}</Text>
        </View>
        <View style={style.textContainer}>
          <Text style={style.priceText}>{price}</Text>
          {type === priceTypes.yearly || type === priceTypes.monthly ? (
            <Text style={style.priceSubText}>per month</Text>
          ) : null}
        </View>
        {type === priceTypes.yearly ? (
          <Text style={style.priceBottomText}>$23.99 per year</Text>
        ) : null}
      </TouchableOpacity>
    );
  }
}

PriceCard.propTypes = {
  type: PropTypes.oneOf([
    priceTypes.monthly,
    priceTypes.yearly,
    priceTypes.lifetime,
  ]).isRequired,
};

export default PriceCard;
