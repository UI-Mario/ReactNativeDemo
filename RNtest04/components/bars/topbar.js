import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Topbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Image style={styles.icon} source={require('../../img/list.png')} />
          <Image
            style={styles.avatar}
            source={require('../../img/avatar.jpg')}
          />
        </View>
        <View style={styles.search}>
          <View style={styles.searchbox}>
            <Image
              style={styles.icon_search}
              source={require('../../img/search.png')}
            />
          </View>
        </View>
        <View style={styles.right}>
          <Image
            style={styles.icon_right}
            source={require('../../img/game.png')}
          />
          <Image
            style={styles.icon_right}
            source={require('../../img/Download.png')}
          />
          <Image
            style={styles.icon_right}
            source={require('../../img/email.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
  },
  left: {
    flex: 2,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: '20%',
    height: '25%',
    marginLeft: -5,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginLeft: 15,
  },
  search: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbox: {
    height: '60%',
    width: 140,
    padding: 9,
    backgroundColor: '#e6e6e6',
    borderRadius: 15,
    justifyContent: 'center',
  },
  icon_search: {
    width: 15,
    height: 15,
  },
  right: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon_right: {
    width: 25,
    height: 25,
  },
});
