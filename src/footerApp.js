import React, { Component } from 'react';
import { Text } from 'react-native';
import {Footer, FooterTab, Button, Icon, Container, Content } from 'native-base';

export default class FooterApp extends Component {
  render() {
    return (
      <Container>
       <Content />

                     <Footer >
                         <FooterTab>
                             <Button active vertical>
                                 <Icon name="home" />
                                 <Text>Restaurante</Text>
                             </Button>
                             <Button vertical>
                                 <Icon name="camera" />
                                 <Text>Feeds</Text>
                             </Button>
                             <Button vertical>
                                 <Icon name="person" />
                                 <Text>Perfil</Text>
                             </Button>
                         </FooterTab>
                     </Footer>


      </Container>

    );
  }
}

module.export = FooterApp;
