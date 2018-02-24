import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types'; // 15.6.0
import styles from './style';

import BackArrowImage from '../../themes/assets/back-arrow.png';

class ScreenTwoHeader extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.backArrowImageContainer}>
            <Image style={styles.backArrowImage} source={BackArrowImage} />
          </View>
        </TouchableOpacity>
        <View style={styles.textAndImage}>
          <View style={styles.crownImageContainer} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    );
  }
}

ScreenTwoHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ScreenTwoHeader;
