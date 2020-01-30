import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Cannal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is cannal</Text>
        <WebView source={{uri: 'https://amap.com'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
