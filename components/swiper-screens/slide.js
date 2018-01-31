import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import style from './style.js';

class Slide extends Component {
  render() {
    const { text, badge } = this.props;
    return (
      <View style={[style.slide]}>
        <View style={style.innerSlide}>
          <Text style={style.text}>{text}</Text>
        </View>
        <Image style={style.badge} source={badge} />
      </View>
    );
  }
}

Slide.propTypes = {
  text: PropTypes.object.isRequired,
  badge: PropTypes.number.isRequired,
};

export default Slide;
