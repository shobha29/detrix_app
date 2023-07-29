import React from 'react';
import {Button, Image, StatusBar, StyleSheet} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Explore, Finance, OnBoard, Profile, Task} from './pages';
import {colors} from './constants';
import {icons} from './assets';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Finance"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabStyle,
      })}>
      <Tab.Screen
        name="Finance"
        component={FinanceStack}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Finance';
          return {
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  routeName === 'Finance' && focused
                    ? icons.financeActive
                    : icons.financeInactive
                }
                style={styles.tabIcon}
              />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskStack}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Task';
          return {
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  routeName === 'Task' && focused
                    ? icons.taskActive
                    : icons.taskInactive
                }
                style={styles.tabIcon}
              />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Explore';
          return {
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  routeName === 'Explore' && focused
                    ? icons.exploreActive
                    : icons.exploreInactive
                }
                style={styles.tabIcon}
              />
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
};

const FinanceStack = () => {
  return (
    <Stack.Navigator initialRouteName="Finance" screenOptions={screenOptions}>
      <Stack.Screen name="Finance" component={Finance} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const TaskStack = () => {
  return (
    <Stack.Navigator initialRouteName="Task" screenOptions={screenOptions}>
      <Stack.Screen name="Task" component={Task} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName="Explore" screenOptions={screenOptions}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const Route = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.blue} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OnBoard"
          screenOptions={screenOptions}>
          <Stack.Screen name="OnBoard" component={OnBoard} />
          <Stack.Screen name="Finance" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Route;

const styles = StyleSheet.create({
  tabStyle: {
    borderRadius: 1000,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 38,
    marginHorizontal: 20,
    borderColor: colors.grey,
    borderWidth: 1,
    backgroundColor: colors.deepPurple,
    height: 61,
  },
  tabIcon: {
    width: 26,
    height: 26,
  },
});
