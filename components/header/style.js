import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../themes/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width,
    height: height * 0.3,
    backgroundColor: colors.keepSafePurple,
  },
  smallContainer: {
    height: height * 0.15,
  },
  textAndImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrowButtonContainer: {
    alignItems: 'flex-end',
  },
  backArrowImage: {
    tintColor: colors.white,
    marginTop: 30,
  },
  backArrowImageContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crownImage: {
    tintColor: colors.white,
    marginBottom: 15,
  },
  crownImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    alignItems: 'center',
    marginTop: 10,
    textAlign: 'center',
    width: width * 0.7,
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.white,
  },
});
