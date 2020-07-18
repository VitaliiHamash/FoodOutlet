import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#F2F4F4" />
        <WebView source={{uri: 'https://foodoutlet.ge/'}} />
      </View>
    );
  }
}
