import React, { Component } from 'react';
import { Text } from 'react-native';
import {Footer, FooterTab, Button, Icon, Container, Content } from 'native-base';
import Home from './screens/Home';

const FooterApp = (props) => {

     const navigate  = props.navigation;

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
                                 onPress={() => navigate('Restaurant')}
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

FooterApp.navigationOptions = {
  header: null
};

export default FooterApp
