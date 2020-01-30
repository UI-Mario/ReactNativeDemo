import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  DrawerLayoutAndroid,
  Alert,
  Button,
} from 'react-native';

import Recommand from '../pages/recommand.js';
import Topbar from '../bars/topbar.js';
import Sidebar from '../bars/sidebar.js';

//这是侧边栏
var navigationView = <Sidebar />;

export default class Home extends Component {
  render() {
    const sidemenuopen = () => {
      this.drawer.openDrawer();
    };
    const sidemenuclose = () => {
      this.drawer.closeDrawer();
    };
    return (
      <DrawerLayoutAndroid
        ref={drawer => {
          this.drawer = drawer;
        }}
        drawerWidth={260}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[1]}>
            <View>
              <TouchableWithoutFeedback onPress={sidemenuopen}>
                <Text
                  style={{
                    position: 'absolute',
                    top: 15,
                    zIndex: 99,
                    opacity: 0,
                  }}>
                  BUTTON
                </Text>
              </TouchableWithoutFeedback>
              <Topbar />
            </View>
            <View
              style={{width: '100%', height: 48, backgroundColor: '#000'}}
            />
            {/* <Button onPress={sidemenuopen} title="button" /> */}

            <Recommand />
          </ScrollView>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f3ecec',
  },
});
