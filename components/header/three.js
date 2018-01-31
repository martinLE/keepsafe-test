import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';
import styles from './style';

import BackArrowImage from '../../themes/assets/close-white.png';

class ScreenThreeHeader extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <View style={[styles.container, styles.smallContainer]}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.backArrowImageContainer}>
            <Image style={styles.backArrowImage} source={BackArrowImage} />
          </View>
        </TouchableOpacity>
        <View style={styles.textAndImage}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  }
}

ScreenThreeHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ScreenThreeHeader;
