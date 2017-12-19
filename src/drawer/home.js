import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../views/home';

const HomeDrawerItem = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
        title: 'Tat Tvam Asi',
        headerTintColor: '#FFCF79',
        headerLeft: (
            <Icon
            name="menu"
            size={30}
            type="entypo"
            iconStyle={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate('DrawerOpen')}
            />
        ),
        headerStyle: {
            backgroundColor: '#990000'
        },
    }),
  },
});

HomeDrawerItem.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      iconStyle={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default HomeDrawerItem;
