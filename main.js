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

const Router = createRouter(() => ({
  home: () => HomeScreen,
  profile: () => ProfileScreen,
  podcast: () => PodcastScreen,
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
              onPress={() => {
                this.props.navigator.push(Router.getRoute('profile'));
              }}
            />

            { /* Placeholders below this point */ }

            <ListItem
              key="casts"
              title="Casts-style podcast info screen"
              icon={{name: "mic"}}
              onPress={() => {
                this.props.navigator.push(Router.getRoute('podcast'));
              }}
            />

            <ListItem
              key="podcast"
              title="Podcasts-app-style podcast info screen"
              icon={{name: "mic"}}
              onPress={() => {
                this.props.navigator.push(Router.getRoute('podcast'));
              }}
            />

            <ListItem
              key="instant-article"
              title="Facebook Instant Article"
              icon={{name: "mic"}}
              onPress={() => {
                this.props.navigator.push(Router.getRoute('podcast'));
              }}
            />

            <ListItem
              key="shared-element-transitions"
              title="Airbnb-style Shared Element Transitions"
              icon={{name: "mic"}}
              onPress={() => {
                this.props.navigator.push(Router.getRoute('podcast'));
              }}
            />

            <ListItem
              key="image-gallery"
              title="A classic Image Gallery"
              icon={{name: "mic"}}
              onPress={() => {
                this.props.navigator.push(Router.getRoute('podcast'));
              }}
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
