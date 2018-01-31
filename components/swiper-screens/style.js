import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const slideMargin = 40;

export default StyleSheet.create({
  container: {},
  // Slide styles
  slide: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'center',
    width: width - 2 * slideMargin,
    margin: 10,
  },
  firstSlide: {
    marginLeft: slideMargin,
  },
  lastSlide: {
    marginRight: slideMargin,
  },
  innerSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#209EF4',
    borderRadius: 2,
    marginLeft: 10,
    marginRight: 10,
    width: width - 2 * slideMargin - 20,
  },
  slideBackground: {
    resizeMode: 'stretch',
    borderRadius: 2,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  badge: {
    marginBottom: -32,
  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 10,
    marginHorizontal: 40,
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
