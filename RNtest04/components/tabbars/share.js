import React, {Component} from 'react';
import {View, Text} from 'react-native';

import SwiperComponent from '../bars/temp.js';

export default class Share extends Component {
  render() {
    return (
      <View>
        <SwiperComponent />
        <Text>This is Share</Text>
      </View>
    );
  }
}
