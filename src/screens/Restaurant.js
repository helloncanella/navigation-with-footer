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

const {width, height} = Dimensions.get('window')

class Restaurant extends Component{
  render(){
    return(

      <View style={styles.container}>
        <ScrollView>
          <BackgroundImageWithCard />
          <CardBlock backgroundCol1="#F9F9F9" text="Segunda" />
          <CardBlock backgroundCol1="#F9F9F9" text="Terça" />
          <CardBlock backgroundCol1="#F9F9F9" text="Quarta" />
          <CardBlock backgroundCol1="#F9F9F9" text="Quinta" />
          <CardBlock backgroundCol1="#F9F9F9" text="Sexta"/>
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

export default Restaurant
