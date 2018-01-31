import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../themes/colors';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: width * 0.9,
    marginRight: 10,
    marginLeft: 10,
    height: 170,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  cardHeader: {
    height: 30,
    justifyContent: 'center',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    alignItems: 'center',
  },
  cardHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.25,
    height: 60,
  },
  priceText: {
    fontSize: 14,
  },
  priceSubText: {
    fontSize: 12,
    color: colors.gray,
    alignSelf: 'center',
  },
  priceBottomText: {
    textAlign: 'center',
    fontSize: 10,
    color: colors.gray,
  },
  mostPopular: {
    height: 150,
    justifyContent: 'flex-start',
    position: 'absolute',
    left: width * 0.25 + 18,
    top: 0,
    backgroundColor: colors.lightGray,
    borderRadius: 2,
    borderColor: colors.lightGray,
    width: width * 0.3,
  },
  mostPopularText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    color: colors.gray,
  },
  card: {
    width: width * 0.25,
    height: 110,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: colors.white,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});
