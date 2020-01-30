import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import Swiper from 'react-native-swiper';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
