import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Right  } from 'native-base';
import { Image, StyleSheet } from 'react-native';

export default class HeaderApp extends Component {
  render() {
    return (
                <Header>
                    <Left/>
                    <Body>
                        <Image source={require("../images/logo.png")} style={styles.image} />
                    </Body>
                    <Right />
                </Header>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 50 
  }
});

module.export = HeaderApp;
