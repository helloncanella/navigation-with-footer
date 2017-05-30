import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import HeaderApp from './header';
// import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
import FooterApp from './footerApp';
import { Container, StyleProvider } from 'native-base';
import studentMeTheme from './theme/variables/studentMeTheme';
import getTheme from './theme/components';


export default class studentMeMobile extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(studentMeTheme)}>
        <Container>
          <HeaderApp/>
           {/* <Home/> */}
           <Restaurant />
           <FooterApp/>
          </Container>

      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('studentMeMobile', () => studentMeMobile);
