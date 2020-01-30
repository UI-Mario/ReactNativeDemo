import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default class Sidebar extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Text>this is 封面</Text>
          </View>
          <Text>Hello World</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
  },
});
