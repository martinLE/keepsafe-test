import React, { Component } from 'react';
import { Text } from 'react-native';

import Slide from './slide';
import Swiper from '../swiper';
import BadgeStorage from '../../themes/assets/badge-storage.png';
import BadgeCloud from '../../themes/assets/badge-cloud.png';
import BadgeBreakin from '../../themes/assets/badge-breakin.png';

import style from './style';

export default class SwiperScreens extends Component {
  render() {
    const slide1Text = (
      <Text>
        <Text style={style.textBold}>1.2 GB</Text> of extra device storage
      </Text>
    );
    const slide2Text = (
      <Text>
        Amazing <Text style={style.textBold}>second</Text> feature
      </Text>
    );
    const slide3Text = (
      <Text>
        Even better <Text style={style.textBold}>third</Text> extra
      </Text>
    );

    return (
      <Swiper style={style.container}>
        <Slide text={slide1Text} badge={BadgeStorage} />
        <Slide text={slide2Text} badge={BadgeCloud} />
        <Slide text={slide3Text} badge={BadgeBreakin} />
      </Swiper>
    );
  }
}
