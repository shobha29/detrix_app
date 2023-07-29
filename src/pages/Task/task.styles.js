import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const {dipPurple, lightBlue, deeperBlue, grey, deepBlue} = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roboto_16: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: lightBlue,
  },
  roboto_18: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    fontWeight: '400',
    color: lightBlue,
  },
  horizontalLine: {
    borderBottomColor: dipPurple,
    borderBottomWidth: 1,
    marginVertical: 21,
  },
  flex_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: deeperBlue,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 17,
    marginHorizontal: 19,
    marginTop: 25,
  },
  tickIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  crossIcon: {
    width: 30,
    height: 30,
  },
  doneTaskText: {
    flex: 1,
    textDecorationLine: 'line-through',
  },
  marginBottom_30: {
    marginBottom: 30,
  },
  floatingBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    bottom: 115,
    backgroundColor: deepBlue,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: grey,
    borderWidth: 1,
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
