import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.titleText}>React Native Home</Text>
          <Text style={styles.subtitleText}>gestures for the win!</Text>
        </View>
      </View>
    );
  }
}

Home.navigationOptions = {
  title: 'Home'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headingContainer: {
    paddingTop: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e',
  },
});

export default Home;
