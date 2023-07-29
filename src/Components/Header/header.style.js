import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 14,
    paddingRight: 16,
    paddingTop: 22,
    paddingBottom: 14,
  },
  rightImage: {
    width: 38,
    height: 38,
  },
  titleStyle: {
    fontFamily: 'Manrope',
    fontSize: 30,
    fontWeight: '400',
    color: colors.lightBlue,
  },
});

export default styles;
