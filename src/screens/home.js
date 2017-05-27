import React, { Component } from 'react';
import { Content, H3, Container } from 'native-base';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import Product from './../components/Product';
import Service from './../components/Service';
import Slide from './../components/Slide';

export default class Home extends Component {

  render() {
    return (
          <ScrollView>
            <Slide />
            <Product />
            <Service />
          </ScrollView>


    );
  }
}
 

module.export = Home;
