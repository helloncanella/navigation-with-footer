import React, { Component } from 'react';
import { Content, H3, Container } from 'native-base';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ size: { width: layout.width, height: layout.height } });
 }

  render() {
    return (
      <Container>

      <Content>
       <H3 style={{margin: 10, fontWeight: 'bold', color: '#2A2C2E'}} >Produtos/Serviços</H3>
       <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
         <Carousel
           autoplay={false}
           style={this.state.size}
           currentPage={1}
           onAnimateNextPage={(p) => console.log(p)}
        >

         <Image source={require('../../img/eastt.png')} style={[this.state.size]} />
         <Image source={require('../../img/frangoo.jpg')} style={[this.state.size]} />
         <Image source={require('../../img/tort.jpg')} style={[this.state.size]} />
         <Image source={require('../../img/pendal.png')} style={[this.state.size]} />
       </Carousel>
      </View>
      </Content>

      <Content>
             <H3 style={{margin: 10, fontWeight: 'bold', color: '#2A2C2E'}} >Restaurante(RU)</H3>
        <Image source={require('../../img/restaurante.jpg')} style={{width: width, height: 200}} />
      </Content>
      </Container>


    );
  }
}


const styles = StyleSheet.create({
  h3: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.export = Home;
