import { StyleSheet } from 'react-native';

import colors from '../../themes/colors';

export default StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  // Slide
  slide: {
    marginBottom: 30,
  },
  // Pagination indicators
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  // Pagination dot
  dot: {
    backgroundColor: colors.whiteTranslucent,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 0,
    marginBottom: 0,
  },
  // Active dot
  activeDot: {
    backgroundColor: colors.white,
  },
});
