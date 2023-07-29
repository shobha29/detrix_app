import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GradientBackground} from '../../Components';
import {icons} from '../../assets';
import styles from './profile.styles';

const initialState = {
  isModalOpen: false,
  isOpenAboutModal: false,
};

const Profile = () => {
  const [{isModalOpen, isOpenAboutModal}, setState] = useState(initialState);
  const navigation = useNavigation();

  const openModal = isAbout => {
    setState(prev => ({...prev, isModalOpen: true, isOpenAboutModal: isAbout}));
  };

  const onCloseModal = () => setState(prev => ({...prev, isModalOpen: false}));

  const renderAboutModal = () => {
    return (
      <TouchableOpacity
        onPress={() => null}
        style={styles.modalContent}
        activeOpacity={1}>
        <Text style={styles.roboto_20}>Information</Text>

        <View style={styles.header}>
          <View style={styles.bullet} />
          <Text style={styles.roboto_14}>About 37Dev app. </Text>
        </View>
        <View style={styles.modalCard}>
          <Text style={styles.roboto_14_200}>
            {`This App is built to help you manage your finances and daily tasks with ease!\n\n`}
            <Text style={styles.bold}>{'Coming soon -'}</Text>
            {`\nTrack expenses, set budgets, receive notifications, and prioritise tasks with reminders.`}
          </Text>
        </View>

        <View style={styles.header}>
          <View style={styles.bullet} />
          <Text style={styles.roboto_14}>Team</Text>
        </View>
        <View style={styles.modalCard}>
          <Text style={styles.roboto_12}>🧑🏽‍🎨 Yamparala Rahul</Text>
          <Text style={styles.roboto_12}>🧑🏻‍💻 Vinaykumar Keerthipati</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSupportModal = () => {
    return (
      <TouchableOpacity
        onPress={() => null}
        style={styles.modalContent}
        activeOpacity={1}>
        <Text style={styles.roboto_20}>Support</Text>

        <View style={styles.header}>
          <View style={styles.bullet} />
          <Text style={styles.roboto_14}>Team</Text>
        </View>
        <View style={styles.modalCard}>
          <Text style={styles.roboto_12}>🧑🏽‍🎨 Yamparala Rahul</Text>
          <Text style={styles.roboto_12}>🧑🏻‍💻 Vinaykumar Keerthipati</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <GradientBackground>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.backArrow} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => navigation.navigate('OnBoard')}>
            <Text style={styles.manrope_16}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userProfile}>
          <Image source={icons.profileImage} style={styles.profile} />
          <Text style={styles.poppins_25}>{'Yamparala Rahul'}</Text>
          <Text style={styles.poppins_14}>
            {'Email Id : rahulvignanwork@gmail.com'}
          </Text>
        </View>

        <View style={styles.myTagsHeader}>
          <Text style={styles.roboto_18}>My Tags</Text>
          <Text style={[styles.roboto_14, styles.addBtn]}>Add new</Text>
        </View>

        <View style={styles.myTagsContent}>
          <Text style={[styles.roboto_16, styles.selectedTag]}>NEFT</Text>
          <Text style={styles.roboto_16}>IMPS</Text>
          <Text style={styles.roboto_16}>UPI</Text>
        </View>

        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => openModal(true)}>
            <Text style={[styles.manrope_16, styles.actionText]}>
              About App
            </Text>
            <Image source={icons.infoCircle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => openModal(false)}>
            <Text style={[styles.manrope_16, styles.actionText]}>Support</Text>
            <Image source={icons.headPhone} />
          </TouchableOpacity>
        </View>

        <Modal
          transparent={true}
          visible={isModalOpen}
          onRequestClose={onCloseModal}>
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={onCloseModal}>
            {isOpenAboutModal ? renderAboutModal() : renderSupportModal()}
          </TouchableOpacity>
        </Modal>
      </View>
    </GradientBackground>
  );
};

export default Profile;
