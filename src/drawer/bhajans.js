import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Bhajans from '../views/bhajans_home';

const BhajansDrawerItem = StackNavigator({
  Bhajans: {
    screen: Bhajans,
    navigationOptions: ({ navigation }) => ({
    title: 'Bhajans',
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



BhajansDrawerItem.navigationOptions = {
  drawerLabel: 'Bhajans',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="note"
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

export default BhajansDrawerItem;
