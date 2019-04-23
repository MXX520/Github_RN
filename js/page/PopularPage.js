import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class PopularPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>欢迎页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
