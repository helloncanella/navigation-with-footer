import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { Content, Tab, Tabs, Header } from 'native-base';
import CardList from './CardList'

class TabsRestaurant extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header hasTabs />
        <Tabs style={{padding: 0, shadowColor: null,borderWidth: null}}>
          <Tab heading="Almoço">
            <CardList />
          </Tab>
          <Tab heading="Jantar">
            <CardList />
          </Tab>
        </Tabs>

      </View>
    );
  }
}

const styles = {
  tabs:{}
}

export default TabsRestaurant
