import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

// ...
export default class WebOutlet extends Component {
  render() {
    return <WebView source={{uri: 'https://foodoutlet.ge/'}} />;
  }
}
