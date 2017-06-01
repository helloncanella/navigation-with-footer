import React, { Component } from 'react';
import { Text } from 'react-native';
import {Footer, FooterTab, Button, Icon, Container, Content } from 'native-base';
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';

export default class FooterApp extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (

                     <Footer >
                         <FooterTab>
                             <Button active vertical
                               title="Voltar"
                               >
                                 <Icon name="home" />
                                 <Text>Home</Text>
                             </Button>
                             <Button vertical

                               >
                                 <Icon name="restaurant" />
                                 <Text>Comida</Text>
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


    );
  }
}


module.export = FooterApp;
