import React from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import {
  registerCustomIconType,
  Text,
  Button,
  Icon,
  SocialIcon,
  Card
} from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';
import fontelloConfig from '../../assets/fontello/config.json';


export default class Home extends React.Component {
    render() {
      return (
        <ScrollView>
            <View style={styles.hero}>
                <Icon color="white" name="whatshot" size={62} type="material" />
                <Text style={styles.heading}>Home</Text>
            </View>
        </ScrollView>
      );
    };
    navigationOptions = {
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
            type="material-community"
            color={tintColor}
          />
        ),
      };
};



const styles = StyleSheet.create({
    heading: {
      color: 'white',
      marginTop: 10,
      fontSize: 22,
    },
    hero: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
      backgroundColor: colors.primary2,
    },
    titleContainer: {},
    button: {
      marginTop: 15,
    },
    title: {
      textAlign: 'center',
      color: colors.grey2,
      ...Platform.select({
        ios: {
          fontFamily: fonts.ios.black,
        },
      }),
    },
    socialRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });