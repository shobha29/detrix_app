import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const {
  seaGreen,
  deeperBlue,
  grey2,
  dimBlue,
  fadePurple,
  lightBlue,
  fadeWhite,
  grey3,
  pink,
  parrotGreen,
  deepBlue,
  grey,
} = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 14,
    borderRadius: 10,
    marginTop: 9,
  },
  balanceCard: {
    padding: 10,
    backgroundColor: deeperBlue,
    alignItems: 'center',
    borderRadius: 10,
  },
  manrope_16: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: '400',
    color: lightBlue,
  },
  fullWidth: {
    width: '100%',
  },
  manrope_14: {
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: '400',
    color: lightBlue,
  },
  manrope_18: {
    fontFamily: 'Manrope',
    fontSize: 18,
    fontWeight: '200',
    color: fadeWhite,
  },
  manrope_35: {
    fontFamily: 'Manrope',
    fontSize: 35,
    fontWeight: '200',
    color: fadeWhite,
  },
  manrope_24: {
    fontFamily: 'Manrope',
    fontSize: 24,
    fontWeight: '200',
    color: fadeWhite,
  },
  manrope_10: {
    fontFamily: 'Manrope',
    fontSize: 10,
    fontWeight: '400',
    color: grey3,
  },
  manrope_12: {
    fontFamily: 'Manrope',
    fontSize: 12,
    fontWeight: '400',
    color: seaGreen,
  },
  pinkText: {
    color: pink,
  },
  roboto_12: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    fontWeight: '300',
    color: grey2,
  },
  dateText: {
    color: dimBlue,
  },
  bottomMargin: {
    marginBottom: 6,
  },
  totalIncome: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: 14,
    justifyContent: 'space-between',
  },
  horizontalLine: {
    borderBottomColor: fadePurple,
    borderBottomWidth: 1,
    marginTop: 30,
    marginBottom: 22,
    width: 128,
    alignSelf: 'center',
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 14,
  },
  seeAllText: {
    color: grey3,
  },
  activityCard: {
    backgroundColor: deeperBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 14,
    width: 120,
  },
  cardAmount: {
    flexDirection: 'row',
    marginTop: 6,
  },
  activityListContainer: {
    marginHorizontal: 19,
    marginTop: 19,
  },
  separator: {
    width: 10,
  },
  marginRight_6: {
    marginRight: 6,
  },
  marginTop_6: {
    marginTop: 6,
  },
  marginRight_9: {
    marginRight: 9,
  },
  homeIcon: {
    width: 46,
    height: 46,
    marginBottom: 2,
  },
  activeJarCard: {
    backgroundColor: deeperBlue,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
    marginRight: 39,
  },
  spentContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  greenText: {
    color: parrotGreen,
  },
  updateBtn: {
    backgroundColor: deepBlue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  flex_one: {
    flex: 1,
  },
  separatorVertical: {
    height: 14,
  },
  activeJarContainer: {
    marginTop: 17,
    marginHorizontal: 15,
  },
  bucketCard: {
    backgroundColor: deeperBlue,
    padding: 10,
    marginBottom: 120,
    marginTop: 14,
    alignSelf: 'flex-start',
    marginLeft: 19,
    alignItems: 'center',
  },
  floatingBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    bottom: 115,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: grey,
    borderWidth: 1,
    backgroundColor: deepBlue,
  },
  leftBtn: {
    borderLeftWidth: 0,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  rightBtn: {
    borderRightWidth: 0,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
});

export default styles;
