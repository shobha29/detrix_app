import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GradientBackground, Header} from '../../Components';
import {icons} from '../../assets';

import styles from './explore.styles';
import {stockChart} from './helper';

const Explore = () => {
  const navigation = useNavigation();

  const renderStockCard = ({item, index}) => (
    <View style={styles.stockCard}>
      <View style={styles.stockContent}>
        <Text style={styles.manrope_18}>{item?.title}</Text>
        <Text style={styles.manrope_18}>{`₹${item?.amount}`}</Text>
      </View>
      <View style={[styles.stockContent, styles.marginTop_6]}>
        <Text style={styles.manrope_14}>NSE EQ</Text>
        <Text
          style={[
            styles.manrope_14,
            index % 2 === 0 ? styles.pinkText : styles.greenText,
          ]}>{`${item?.isProfit ? '+' : '-'}${item?.exchangeAmount}`}</Text>
      </View>
    </View>
  );

  const renderCryptoCard = () => (
    <View style={styles.cryptoCard}>
      <Image source={icons.bitcoin} style={styles.bitcoinIcon} />
      <View style={styles.container}>
        <View style={styles.stockContent}>
          <Text style={styles.manrope_18}>{'Bitcoin'}</Text>
          <Text style={styles.manrope_18}>{'₹3400.45'}</Text>
        </View>
        <View style={[styles.stockContent, styles.marginTop_6]}>
          <Text style={[styles.manrope_14, styles.container]}>BTC</Text>
          <Text style={[styles.manrope_14, styles.hourText]}>24H</Text>
          <Text style={[styles.manrope_14, styles.pinkText]}>
            {'-13.35 (0.39%)'}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Header
          title="🔭 Explore"
          rightIcon={icons.profileImage}
          rightOnPress={() => {
            console.log('pressed');
            navigation.navigate('Profile');
          }}
        />

        <ScrollView>
          <View style={styles.activityHeader}>
            <Text style={styles.manrope_16}>Indian Stock Chart</Text>
            <Text style={[styles.manrope_16, styles.greyText]}>Expand</Text>
          </View>

          <FlatList
            data={stockChart}
            renderItem={renderStockCard}
            contentContainerStyle={styles.stockContainer}
            ItemSeparatorComponent={() => (
              <View style={styles.horizontalLine} />
            )}
          />

          <View style={styles.activityHeader}>
            <Text style={styles.manrope_16}>Crypto Market Chart</Text>
            <Text style={[styles.manrope_16, styles.greyText]}>Expand</Text>
          </View>

          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={renderCryptoCard}
            contentContainerStyle={[
              styles.stockContainer,
              styles.addBottomMargin,
            ]}
            ItemSeparatorComponent={() => (
              <View style={styles.horizontalLine} />
            )}
          />
        </ScrollView>
      </View>
    </GradientBackground>
  );
};

export default Explore;
