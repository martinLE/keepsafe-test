import React from 'react';
import { View } from 'react-native';

import PriceCard from './card';
import priceTypes from './types';
import style from './style';

class PriceScreenTwo extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <PriceCard type={priceTypes.yearly} />
        <PriceCard type={priceTypes.lifetime} />
      </View>
    );
  }
}

export default PriceScreenTwo;
