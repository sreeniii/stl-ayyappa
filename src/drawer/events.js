import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Events from '../views/events_home';

const EventsDrawerItem = StackNavigator({
  Events: {
    screen: Events,
    navigationOptions: ({ navigation }) => ({
    title: 'Events',
    headerLeft: (
        <Icon
        name="menu"
        size={30}
        type="entypo"
        iconStyle={{ paddingLeft: 10 }}
        onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
});



EventsDrawerItem.navigationOptions = {
  drawerLabel: 'Events',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="event"
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

export default EventsDrawerItem;
