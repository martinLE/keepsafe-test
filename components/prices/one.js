import React from 'react';
import { View, Text } from 'react-native';

import PriceCard from './card';
import priceTypes from './types';
import style from './style';

class PriceScreenOne extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <PriceCard type={priceTypes.monthly} />
        <View style={style.mostPopular}>
          <Text style={style.mostPopularText}>MOST POPULAR</Text>
        </View>
        <PriceCard type={priceTypes.yearly} />
        <PriceCard type={priceTypes.lifetime} />
      </View>
    );
  }
}

export default PriceScreenOne;
