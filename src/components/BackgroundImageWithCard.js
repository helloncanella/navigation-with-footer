import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import {
  Icon,
  Container,
  Card,
  Tabs,
  Tab,
  Header
} from 'native-base';

const {width, height} = Dimensions.get('window')

class BackgroundImageWithCard extends Component{

constructor(props){
  super(props);
}

  render(){
    return(
           <Image style={styles.backgroundImage} source={this.props.image}>
             <Container>
              <View style={styles.containerCard}>
                <Card style={custom.card}>
                   <Text style={styles.title}>
                     {
                       this.props.title
                     }
                   </Text>
                   <View style={styles.wrap}>
                    <Text style={styles.open}>
                      <Icon ios='ios-alarm' android="md-alarm" style={{fontSize: 20, color: '#289f71'}}/> ABERTO</Text>
                  </View>
                </Card>
            </View>
            </Container>
           </Image>
    );
  }
}

const custom = {
  card:{
    backgroundColor: '#fff',
    padding: 16,
    width: 300,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const styles = StyleSheet.create({
  header:{
    width,
    height: height*0.4
  },
  title:{
    fontSize: 25,
    fontFamily: 'Roboto_medium'
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
    alignItems: 'center'
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


export default BackgroundImageWithCard
