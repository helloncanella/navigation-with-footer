import React, { Component } from 'react';
import { Content } from 'native-base';
import {
  Text,
  View,
  Dimensions,
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
       <Content>
        <Text>Produtos/Serviços</Text>
        <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
          <Carousel
            autoplay={false}
            style={this.state.size}
            currentPage={1}
            onAnimateNextPage={(p) => console.log(p)}
         >
          <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}><Text>1</Text></View>
          <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
        </Carousel>
       </View>
       </Content>


    );
  }
}

module.export = Home;
