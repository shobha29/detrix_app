import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GradientBackground, Header} from '../../Components';
import {icons} from '../../assets';
import {currencyFormat} from '../../utils';

import styles from './finance.styles';
import {recentActivityData} from './helper';

const Finance = () => {
  const navigation = useNavigation();

  const keyExtractor = (_, index) => index.toString();

  const balanceExploreCard = ({title, amount}) => {
    const [wholeAmount, decimalAmount] = amount.split('.');
    return (
      <View style={styles.balanceCard}>
        <Text style={[styles.manrope_16, styles.bottomMargin]}>{title}</Text>
        <Text style={styles.manrope_18}>
          {'₹'}
          <Text style={styles.manrope_35}>{`${currencyFormat(
            wholeAmount,
          )}.`}</Text>
          {decimalAmount}
        </Text>
      </View>
    );
  };

  const renderActivity = ({item}) => (
    <View style={styles.activityCard}>
      <Image source={icons.home} style={styles.homeIcon} />
      <View style={styles.fullWidth}>
        <Text style={styles.manrope_16} numberOfLines={1}>
          {item?.title}
        </Text>
      </View>
      <View style={styles.cardAmount}>
        <Text style={[styles.manrope_10, styles.marginRight_6]}>
          {item?.title === 'Home Rent' ? 'Sent' : 'Received'}
        </Text>
        <Text
          style={[
            styles.manrope_12,
            item?.title === 'Home Rent' && styles.pinkText,
          ]}>{`₹${currencyFormat(item?.amount)}`}</Text>
      </View>
      <Text style={[styles.manrope_10, styles.marginTop_6]}>{item?.date}</Text>
    </View>
  );

  const renderActiveJar = () => (
    <View style={styles.activeJarCard}>
      <Image source={icons.home} style={styles.homeIcon} />
      <View style={styles.cardContent}>
        <View style={styles.spentContent}>
          <Text style={[styles.manrope_16, styles.flex_one]}>Food</Text>
          <View style={styles.spentContent}>
            <Text style={[styles.manrope_10, styles.marginRight_6]}>Limit</Text>
            <Text style={[styles.manrope_12, styles.greenText]}>1000</Text>
          </View>
        </View>
        <View style={styles.spentContent}>
          <View style={[styles.spentContent, styles.marginRight_9]}>
            <Text style={[styles.manrope_10, styles.marginRight_6]}>Spent</Text>
            <Text style={[styles.manrope_12, styles.pinkText]}>1500</Text>
          </View>
          <View style={styles.spentContent}>
            <Text style={[styles.manrope_10, styles.marginRight_6]}>
              Remain
            </Text>
            <Text style={styles.manrope_12}>1500</Text>
          </View>
        </View>
      </View>
      <View style={styles.updateBtn}>
        <Text style={styles.manrope_14}>Update</Text>
      </View>
    </View>
  );

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Header
          title="🤑 Finance"
          rightIcon={icons.profileImage}
          rightOnPress={() => navigation.navigate('Profile')}
        />
        <ScrollView>
          <View style={styles.topContent}>
            {balanceExploreCard({title: 'Balance', amount: '42000.14'})}
            {balanceExploreCard({title: 'Expense', amount: '22000.14'})}
          </View>

          <View style={[styles.balanceCard, styles.totalIncome]}>
            <View>
              <Text style={styles.manrope_16}>Total Income</Text>
              <Text style={styles.roboto_12}>
                Upto <Text style={styles.dateText}>13th Feb 2023</Text>
              </Text>
            </View>
            <Text style={styles.manrope_24}>₹ 42,000.14</Text>
          </View>

          <View style={styles.horizontalLine} />

          <View style={styles.activityHeader}>
            <Text style={styles.manrope_16}>Recent Activity</Text>
            <Text style={[styles.manrope_16, styles.seeAllText]}>See all</Text>
          </View>

          <View style={styles.activityListContainer}>
            <FlatList
              data={recentActivityData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={renderActivity}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              keyExtractor={keyExtractor}
            />
          </View>

          <View style={styles.horizontalLine} />

          <View style={styles.activityHeader}>
            <Text style={styles.manrope_16}>Active Jars</Text>
            <Text style={[styles.manrope_16, styles.seeAllText]}>See all</Text>
          </View>

          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={renderActiveJar}
            ItemSeparatorComponent={() => (
              <View style={styles.separatorVertical} />
            )}
            contentContainerStyle={styles.activeJarContainer}
          />

          <View style={styles.horizontalLine} />

          <View style={styles.activityHeader}>
            <Text style={styles.manrope_16}>Buckets</Text>
            <Text style={[styles.manrope_16, styles.seeAllText]}>See all</Text>
          </View>
          <View style={styles.bucketCard}>
            <Image source={icons.home} style={styles.homeIcon} />
            <Text style={styles.manrope_14}>Food Bucket</Text>
          </View>
        </ScrollView>

        <View style={styles.floatingBtn}>
          <View style={[styles.button, styles.leftBtn]}>
            <Image source={icons.downArrow} />
          </View>
          <View style={[styles.button, styles.rightBtn]}>
            <Image source={icons.upArrow} />
          </View>
        </View>
      </View>
    </GradientBackground>
  );
};

export default Finance;
