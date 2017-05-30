import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions
} from 'react-native';
import {
  Container,
  Content,
  Body,
  Card,
  CardItem,
  Icon
} from 'native-base';
import TabsRestaurant from './../components/TabsRestaurant'

const {width, height} = Dimensions.get('window')

class Restaurant extends Component{
  render(){
    return(

      <View style={styles.container}>
        <View style={styles.header}>
           <Image style={styles.backgroundImage} source={require('../../images/restauranteUENF.jpg')}>
             <Container>
              <View style={styles.containerCard}>
                <View style={styles.card}>
                   <Text style={styles.title}> Restaurante</Text>
                   <View style={styles.wrap}>
                    <Text style={styles.open}>
                      <Icon ios='ios-alarm' android="md-alarm" style={{fontSize: 20, color: '#289f71'}}/> ABERTO</Text>
                  </View>
                </View>
            </View>
            </Container>
           </Image>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1efef'
  },
  header:{
    width,
    height: height*0.4
  },
  title:{
    fontSize: 25
  },
  backgroundImage:{
    width,
    height: 180,
    justifyContent: 'space-between'
  },
  containerCard:{
    position: 'absolute',
    bottom: -height*0.16,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  card:{
    backgroundColor: '#fff',
    borderRadius: 2,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3
    },
    padding: 16,
    width: 300,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrap:{
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  open:{
    fontSize: 18,
    color: '#289f71',
    fontWeight: 'bold',
    fontFamily: 'Open Sans'
  }
});

export default Restaurant
