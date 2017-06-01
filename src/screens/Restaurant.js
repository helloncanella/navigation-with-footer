import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView
} from 'react-native';
import {
  Container,
  Content,
  Body,
  Card,
  CardItem,
  Icon
} from 'native-base';
import BackgroundImageWithCard from './../components/BackgroundImageWithCard';
import CardBlock from './../components/CardBlock';
import Menu from './Menu';
import {StackNavigator} from 'react-navigation';
const ImageRestaurant = require('../../images/restauranteUENF.jpg');

const {width, height} = Dimensions.get('window')

class Restaurant extends Component{

  static navigationOptions = {
    header:{
      visible: false
    }
  }

  render(){
    return(

      <View style={styles.container}>
        <ScrollView>
          <BackgroundImageWithCard title="Restaurante" image={ImageRestaurant}   />
          <Content style={{marginTop: (height*0.15)}}>
          <CardBlock backgroundCol1="#F9F9F9" text="Segunda" onPress={() => this.props.navigation.navigate('Menu')}  />
          <CardBlock backgroundCol1="#F9F9F9" text="Terça" />
          <CardBlock backgroundCol1="#F9F9F9" text="Quarta" />
          <CardBlock backgroundCol1="#F9F9F9" text="Quinta" />
          <CardBlock backgroundCol1="#F9F9F9" text="Sexta"/>
        </Content>
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1efef'
  }
});

const SimpleApp = StackNavigator({
  Restaurant: { screen: Restaurant },
  Menu: { screen: Menu },
});

export default Restaurant
