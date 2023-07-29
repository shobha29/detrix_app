import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GradientBackground} from '../../Components';
import styles from './onBoard.styles';
import {icons} from '../../assets';
import {colors} from '../../constants';

const {maritimeBlue, deepBlue} = colors;

const OnBoard = () => {
  const navigation = useNavigation();

  return (
    <GradientBackground gradientColor={[maritimeBlue, deepBlue]}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.loginText}>LogIn or SignUp, using</Text>
        <TouchableOpacity
          style={styles.googleBtn}
          onPress={() => navigation.navigate('Finance')}>
          <Image source={icons.googleSign} style={styles.googleIcon} />
          <Text style={styles.googleBtnText}>Google</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

export default OnBoard;
