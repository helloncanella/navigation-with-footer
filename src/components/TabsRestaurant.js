import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { Content, Tab, Tabs, Header } from 'native-base';

class TabsRestaurant extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
            <Header hasTabs />
            <Tabs>
                <Tab heading="Almoço">
                    <Text>Almoço</Text>
                </Tab>
                <Tab heading="Jantar">

                      <Text>Jantar</Text>
                </Tab>
            </Tabs>
          </View>
        );
    }
}

export default TabsRestaurant
