import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const {
  deepBlue,
  pink,
  lightBlue,
  dimBlue,
  purple,
  fadeGreen,
  purple2,
  modalBg,
} = colors;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 22,
    marginLeft: 19,
    marginRight: 21,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoutBtn: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: deepBlue,
    borderRadius: 100,
    alignItems: 'center',
  },
  manrope_16: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: '400',
    color: pink,
  },
  userProfile: {
    alignItems: 'center',
    marginBottom: 58,
  },
  profile: {
    width: 136,
    height: 136,
  },
  poppins_25: {
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
    fontWeight: '400',
    color: lightBlue,
    marginTop: 22,
    marginBottom: 10,
  },
  poppins_14: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: lightBlue,
  },
  roboto_14: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: dimBlue,
  },
  roboto_14_200: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: '200',
    color: dimBlue,
  },
  bold: {
    fontWeight: 'bold',
  },
  roboto_18: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    fontWeight: '400',
    color: dimBlue,
  },
  roboto_16: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: lightBlue,
    paddingVertical: 10,
    paddingHorizontal: 17,
  },
  myTagsHeader: {
    flexDirection: 'row',
    marginLeft: 27,
    marginRight: 37,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: purple,
    borderRadius: 100,
  },
  myTagsContent: {
    backgroundColor: purple,
    marginLeft: 27,
    marginRight: 37,
    paddingHorizontal: 9,
    paddingVertical: 4,
    marginBottom: 34,
  },
  selectedTag: {
    backgroundColor: deepBlue,
    borderRadius: 100,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 27,
    marginRight: 37,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: purple2,
    width: 153,
  },
  actionText: {
    color: fadeGreen,
    marginRight: 10,
  },
  modalContainer: {
    backgroundColor: modalBg,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    paddingTop: 15,
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderRadius: 20,
    backgroundColor: deepBlue,
    width: '85%',
  },
  roboto_20: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    fontWeight: '400',
    color: dimBlue,
    alignSelf: 'center',
  },
  roboto_12: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: dimBlue,
  },
  bullet: {
    width: 10,
    height: 10,
    backgroundColor: purple,
    marginRight: 8,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  modalCard: {
    backgroundColor: purple,
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 18,
    marginTop: 10,
    marginBottom: 14,
  },
});

export default styles;
