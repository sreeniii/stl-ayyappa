import React from 'react';
import { View, Image, Dimensions, Platform, Text } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import Home from './src/drawer/home';
import Bhajans from './src/drawer/bhajans';
import Events from './src/drawer/events';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>STL Ayyappa</Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

const MainNavigator = DrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: Home,
    },
    Bhajans: {
      path: '/bhajans',
      screen: Bhajans,
    },
    Events: {
      path: '/events',
      screen: Events,
    }
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.7,
    contentComponent: CustomDrawerContentComponent,
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          Platform.OS === 'android' &&
          <View style={{ height: Expo.Constants.statusBarHeight }}/>
        }
        <MainNavigator/>
      </View>
    );
  }
}