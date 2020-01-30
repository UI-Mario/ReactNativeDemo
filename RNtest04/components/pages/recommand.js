import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import SwiperComponent from './swiper.js';
import VideoList from './videolist.js';

export default class Recommand extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SwiperComponent />
          <VideoList />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 8,
  },
});
