import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types'; // 15.6.0
import styles from './style';

import CrownImage from '../../themes/assets/premium-badge.png';

import BackArrowImage from '../../themes/assets/back-arrow.png';

class ScreenOneHeader extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.backArrowImageContainer}>
            <Image style={styles.backArrowImage} source={BackArrowImage} />
          </View>
        </TouchableOpacity>
        <View style={styles.textAndImage}>
          <View style={styles.crownImageContainer}>
            <Image style={styles.crownImage} source={CrownImage} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  }
}

ScreenOneHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ScreenOneHeader;
