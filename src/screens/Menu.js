import React, {Component} from 'react';
import {
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import{

} from 'native-base';
import BackgroundImageWithCard from './../components/BackgroundImageWithCard';
import TabsRestaurant from './../components/TabsRestaurant';
const prato = require('../../images/prato.jpg');

const {width, height} = Dimensions.get('window');

class Menu extends Component {
  render() {
    return(
      <View style={{flex:1}}>
        <ScrollView>
          <BackgroundImageWithCard title="Cardápio" image={prato}  />
          <View style={styles.container}>
            <TabsRestaurant />
          </View>
        </ScrollView>
      </View>

    );
  }
}


const styles = {
  container:{
    flex: 1,
    marginTop: (height * 0.05)
  }
}



export default Menu
