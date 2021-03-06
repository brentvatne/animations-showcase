import Exponent from 'exponent';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import {
  List,
  ListItem,
} from 'react-native-elements'

import ProfileScreen from './ProfileScreen';
import PodcastScreen from './PodcastScreen';
import MomentsScreen from './MomentsScreen';

const Router = createRouter(() => ({
  home: () => HomeScreen,
  profile: () => ProfileScreen,
  podcast: () => PodcastScreen,
  moments: () => MomentsScreen,
}));

class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}

class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Animations Showcase',
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F7F7F7'}}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <List containerStyle={{marginTop: 0}}>
            <ListItem
              key="profile"
              title="Twitter-style profile screen"
              icon={{name: "person"}}
              onPress={() => this.props.navigator.push('profile') }
            />

            <ListItem
              key="moments"
              title={`Twitter-style "Moments" scrolling`}
              icon={{name: "border-outer"}}
              onPress={() => this.props.navigator.push('moments') }
            />
          </List>

          <StatusBar barStyle="default" />
        </ScrollView>
      </View>
    )
  }

  _handlePressTwitterProfile = () => {
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
  },
});

Exponent.registerRootComponent(App);
