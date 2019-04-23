import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil'

export default class WelcomePage extends Component {

  //页面加载后
  componentDidMount(){
      this.time = setTimeout(() => {
        NavigationUtil.resetToHomePage({
          navigation:this.props.navigation
        })
      }, 3000);
  }

  //组件销毁
  componentWillUnmount(){
      this.time && clearTimeout(this.time);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome 欢迎页</Text>
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
