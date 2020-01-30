import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    height: 168,
  },
  swiperimg: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}
        // eslint-disable-next-line react-native/no-inline-styles
        paginationStyle={{bottom: 8, left: 290}}
        autoplayTimeout={3}
        dot={
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              //未选中的圆点样式
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 6,
              height: 6,
              borderRadius: 4,
              marginLeft: 2,
              marginRight: 2,
            }}
          />
        }
        activeDot={
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              //选中的圆点样式
              backgroundColor: 'white',
              width: 6,
              height: 6,
              borderRadius: 4,
              marginLeft: 2,
              marginRight: 2,
            }}
          />
        }>
        <Image
          style={styles.swiperimg}
          source={require('../../img/swiper1.jpg')}
        />
        <Image
          style={styles.swiperimg}
          source={require('../../img/swiper3.jpg')}
        />
        <Image
          style={styles.swiperimg}
          source={require('../../img/swiper2.jpg')}
        />
      </Swiper>
    );
  }
}
