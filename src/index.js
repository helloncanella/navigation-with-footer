import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import HeaderApp from './header';
import Home from './screens/home';
import FooterApp from './footerApp';

export default class studentMeMobile extends Component {
  render() {
    return (
      <View>
       <HeaderApp/>
       <Home/>
       <FooterApp/>
      </View>
    );
  }
}

AppRegistry.registerComponent('studentMeMobile', () => studentMeMobile);
