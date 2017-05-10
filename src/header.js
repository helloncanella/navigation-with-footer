import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Right  } from 'native-base';
import { Image } from 'react-native';

export default class HeaderApp extends Component {
  render() {
    return (
                <Header>
                    <Left/>
                    <Body>
                        <Image source={require("../img/logo.png")} />
                    </Body>
                    <Right />
                </Header>
    );
  }
}

module.export = HeaderApp;
