import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Header, { headerTypes } from '../../components/header';

import Prices, { priceCardTypes } from '../../components/prices';
import SwiperScreens from '../../components/swiper-screens';
import style from './style';

class MainScreen extends Component {
  render() {
    const { title, subtitle, subscriptionTitle } = this.props;
    return (
      <View style={style.container}>
        <Header title={title} type={headerTypes.ScreenThree} />
        <SwiperScreens />
        <Text style={style.text}>{subtitle}</Text>
        <Prices type={priceCardTypes.ScreenOne} />
        <TouchableOpacity onPress={() => {}} style={style.footer}>
          <Text style={style.text}>{subscriptionTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MainScreen;
