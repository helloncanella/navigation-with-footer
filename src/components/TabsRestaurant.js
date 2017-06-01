import React, { Component } from 'react';
import {Text, View, Dimensions} from 'react-native';
import { Container, Content, Tab, Tabs, Header } from 'native-base';
import CardList from './CardList';

const {width, height} = Dimensions.get('window')

class TabsRestaurant extends Component {
  render() {
    return (
      <View style={{flex: 1}}>

        <Container>
          <Header hasTabs style={{backgroundColor: '#f4f4f4', elevation: 0}} />
          <Tabs style={{backgroundColor: '#f4f4f4'}}>
            <Tab heading="Almoço">
              <CardList />
            </Tab>
            <Tab heading="Jantar">
              <CardList />
            </Tab>
          </Tabs>

        </Container>
      </View>
    );
  }
}

const styles = {
  tabs:{}
}

export default TabsRestaurant
