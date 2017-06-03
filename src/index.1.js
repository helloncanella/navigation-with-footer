import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import App from './App';
import Restaurant from './screens/Restaurant';
import Home from './screens/Home';
import HeaderApp from './header';
import FooterApp from './footerApp';
import { Container, StyleProvider } from 'native-base';
import studentMeTheme from './theme/variables/studentMeTheme';
import getTheme from './theme/components';

import { StackNavigator } from 'react-navigation';

export default class studentMeMobile extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <StyleProvider style={getTheme(studentMeTheme)}>
        <Container>
          <HeaderApp />
          <Home navigation={navigation} />
          <FooterApp navigation={navigation} />
        </Container>
      </StyleProvider>
    );
  }
}

export const HomeStack = StackNavigator({
  Home: { screen: Home },
  Restaurant: { screen: Restaurant }
});

AppRegistry.registerComponent('studentMeMobile', () => HomeStack);


