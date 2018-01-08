import React from 'react';
import { StyleSheet, ListView, ScrollView, View, ActivityIndicator} from 'react-native';
import { List, ListItem} from 'react-native-elements';

class Bhajans extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    return fetch('https://stl-ayyappa-api.herokuapp.com/bhajans/ENGLISH')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          selectedIndex: 0,
          value: 0.5,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  renderRow(rowData, sectionID) {
    const { navigate } = this.props.navigation;
    return (
      <ListItem
        key={sectionID}
        onPress={() =>
          navigate('Bhajan_Detail', rowData)
        }
        title={rowData.name}
        icon={{ name: rowData.icon }}
      />
    );
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
      <ScrollView style={styles.container}>
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
          />
        </List>
      </ScrollView>
    );
  }
}

Bhajans.navigationOptions = {
  title: 'Bhajans'
};

const log = (title) => console.log('this is an example method ' + title);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default Bhajans;
