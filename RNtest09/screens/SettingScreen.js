import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
