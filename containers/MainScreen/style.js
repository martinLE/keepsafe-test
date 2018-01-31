import { StyleSheet } from 'react-native';

import colors from '../../themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.keepSafePurple,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 18,
  },
  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f3497',
  },
});
