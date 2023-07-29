import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const {
  grey4,
  fadeWhite,
  lightBlue,
  grey3,
  pink,
  seaGreen,
  darkGrey,
  deeperBlue,
  navyBlue,
} = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 14,
    marginTop: 14,
  },
  manrope_14: {
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: '400',
    color: grey4,
  },
  manrope_16: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: '400',
    color: lightBlue,
  },
  manrope_18: {
    fontFamily: 'Manrope',
    fontSize: 18,
    fontWeight: '400',
    color: fadeWhite,
  },
  marginTop_6: {
    marginTop: 6,
  },
  greyText: {
    color: grey3,
  },
  stockContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pinkText: {
    color: pink,
  },
  greenText: {
    color: seaGreen,
  },
  stockCard: {
    marginHorizontal: 10,
  },
  cryptoCard: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  horizontalLine: {
    borderBottomColor: darkGrey,
    borderBottomWidth: 0.7,
    marginHorizontal: 25,
    marginVertical: 8,
  },
  stockContainer: {
    marginHorizontal: 9,
    backgroundColor: deeperBlue,
    marginTop: 15,
    padding: 10,
    borderRadius: 20,
    marginBottom: 38,
  },
  addBottomMargin: {
    marginBottom: 120,
  },
  bitcoinIcon: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  hourText: {
    backgroundColor: navyBlue,
    padding: 1,
    marginRight: 10,
    borderRadius: 1,
  },
});

export default styles;
