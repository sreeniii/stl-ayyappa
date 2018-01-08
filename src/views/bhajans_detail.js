import React from 'react';
import { StyleSheet, ScrollView, View, ActivityIndicator, Text} from 'react-native';

class BhajanDetail extends React.Component {
    constructor(props) {
        super(props);

        console.log(props.navigation.state.params.id);

        this.state = {
            isLoading: true,
            lyrics: ""
        }
    }

    componentDidMount() {
        return fetch('https://stl-ayyappa-api.herokuapp.com/bhajans/ENGLISH')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              lyrics: responseJson[0].lyrics,
            }, function() {
              // do something with new state
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }

    render() {
        if (this.state.isLoading) {
          return (
            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          );
        }
    
        return (
          <View style={styles.container}>
            <ScrollView>
              <Text>{this.state.lyrics}</Text>
            </ScrollView>
          </View>
        );
    }
};

BhajanDetail.navigationOptions = {
  title: 'Bhajan Details'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default BhajanDetail;