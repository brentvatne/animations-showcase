import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

export default class PodcastScreen extends React.Component {

  static route = {
    navigationBar: {
      visible: true,
      title: 'Podcast',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 400, height: 400, backgroundColor: 'red'}}>
        </View>

        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
