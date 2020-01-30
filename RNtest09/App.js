import React from 'react';
import {Text, View, Button} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>this is Home!</Text>
        <Button
          title="go to detail"
          onPress={() => this.props.navigation.navigate('HomeDetail')}
        />
      </View>
    );
  }
}

class HomeScreenDetail extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>this is Detail</Text>
        <Button
          title="go to home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const navOptionHandler = navigation => ({
  header: null,
});

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navOptionHandler,
  },
  HomeDetail: {
    screen: HomeScreenDetail,
    navigationOptions: navOptionHandler,
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
