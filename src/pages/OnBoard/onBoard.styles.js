import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const {white, deeperBlue} = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontFamily: 'RockSalt-Regular',
    fontSize: 60,
    fontWeight: '400',
    color: white,
  },
  loginText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    fontWeight: '400',
    color: white,
    marginTop: 156,
    marginBottom: 25,
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 70,
    borderRadius: 100,
    backgroundColor: deeperBlue,
  },
  googleIcon: {
    width: 29,
    height: 29,
    marginRight: 10,
  },
  googleBtnText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    fontWeight: '400',
    color: white,
  },
});

export default styles;
