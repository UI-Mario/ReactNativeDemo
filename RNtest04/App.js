import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TabNavigator from 'react-native-tab-navigator';
import SplashScreen from 'react-native-splash-screen';

import Home from './components/tabbars/home.js';
import Cannal from './components/tabbars/cannal.js';
import Share from './components/tabbars/share.js';
import Cart from './components/tabbars/cart.js';

// const App: () => React$Node = () => {
//   return (
//     <View>
//       <Text>hhh</Text>
//     </View>
//   );
// };

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            titleStyle={styles.titleSty}
            selectedTitleStyle={styles.selectedTitle}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('./img/home-dark.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('./img/home-light.png')}
              />
            )}
            onPress={() => this.setState({selectedTab: 'home'})}>
            <Home />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'cannal'}
            title="频道"
            titleStyle={styles.titleSty}
            selectedTitleStyle={styles.selectedTitle}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('./img/cannal-dark.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('./img/cannal-light.png')}
              />
            )}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({selectedTab: 'cannal'})}>
            <Cannal />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'share'}
            title="动态"
            titleStyle={styles.titleSty}
            selectedTitleStyle={styles.selectedTitle}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('./img/share-dark.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('./img/share-light.png')}
              />
            )}

            badgeText="1"
            renderBadge={() => (
              <View style={styles.badgeView}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            )}
            onPress={() => this.setState({selectedTab: 'share'})}>
            <Share />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'cart'}
            title="会员购"
            titleStyle={styles.titleSty}
            selectedTitleStyle={styles.selectedTitle}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('./img/cart-dark.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('./img/cart-light.png')}
              />
            )}
            onPress={() => this.setState({selectedTab: 'cart'})}>
            <Cart />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabIcon: {
    width: 22,
    height: 22,
  },
  titleSty: {
    marginBottom: 4,
    color: '#8a8a8a',
    fontSize: 10,
  },
  selectedTitle: {
    color: '#fb7299',
  },
  badgeView: {
    width: 15,
    height: 15,
    backgroundColor: '#fb7299',
    borderWidth: 1,
    marginRight: 1,
    marginTop: 2,
    borderColor: '#fb7299',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 9,
  },
});

// export default App;
