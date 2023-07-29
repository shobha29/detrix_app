import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../../constants';
import styles from './gradientBackground.style';

const {bg1, bg2} = colors;

const GradientBackground = ({children, gradientColor = [bg1, bg2]}) => {
  return (
    <LinearGradient style={styles.container} colors={gradientColor}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
