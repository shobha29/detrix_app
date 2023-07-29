import React from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GradientBackground, Header} from '../../Components';
import styles from './task.styles';
import {icons} from '../../assets';

const Task = () => {
  const navigation = useNavigation();

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Header
          title="✅ Task"
          rightIcon={icons.profileImage}
          rightOnPress={() => navigation.navigate('Profile')}
        />

        <View style={styles.cardContainer}>
          <Text style={styles.roboto_16}>On Going Tasks</Text>

          <View style={styles.horizontalLine} />

          <View style={[styles.flex_row, styles.marginBottom_30]}>
            <Image source={icons.circle} style={styles.tickIcon} />
            <Text style={styles.roboto_18}>Adding Podcast Section</Text>
          </View>
          <View style={styles.flex_row}>
            <Image source={icons.circle} style={styles.tickIcon} />
            <Text style={styles.roboto_18}>Mind map View Design</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.roboto_16}>Done Tasks</Text>

          <View style={styles.horizontalLine} />

          <View style={styles.flex_row}>
            <Image source={icons.tickCircle} style={styles.tickIcon} />
            <Text style={[styles.roboto_18, styles.doneTaskText]}>
              Onefitness app Design
            </Text>
            <Image source={icons.crossCircle} style={styles.crossIcon} />
          </View>
        </View>

        <View style={styles.floatingBtn}>
          <View style={[styles.button, styles.leftBtn]}>
            <Image source={icons.calendar} />
          </View>
          <View style={[styles.button, styles.rightBtn]}>
            <Image source={icons.plusCircle} />
          </View>
        </View>
      </View>
    </GradientBackground>
  );
};

export default Task;
