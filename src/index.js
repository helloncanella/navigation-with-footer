import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import HeaderApp from './header';
import Home from './screens/home';
import FooterApp from './footerApp';
import { Container } from 'native-base';


export default class studentMeMobile extends Component {
  render() {
    return (
      <Container>
       <HeaderApp/>
       <Home/>
       <FooterApp/>
      </Container>
    );
  }
}

AppRegistry.registerComponent('studentMeMobile', () => studentMeMobile);
