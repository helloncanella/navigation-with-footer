import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Right  } from 'native-base';

export default class HeaderApp extends Component {
  render() {
    return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>LOGO-MARCA</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
    );
  }
}

module.export = HeaderApp;
