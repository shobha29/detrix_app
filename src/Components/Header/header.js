import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {isEmpty} from 'lodash';

import styles from './header.style';

const Header = ({title = '', rightIcon = '', rightOnPress = () => {}}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <TouchableOpacity onPress={rightOnPress}>
        <Image source={rightIcon} style={styles.rightImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
