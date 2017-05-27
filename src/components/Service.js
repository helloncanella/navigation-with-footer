import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';


class Service extends Component{

     _renderItem(item){
       return(
         <Image style={{width: 120, height: 180 }} source={{uri: item.image}} />
       )
     }


  render(){
    return(
        <View style={{flex: 1}}>
          <View>
            <Text style={styles.text}>Serviços</Text>
            <FlatList
              horizontal
              ItemSeparatorComponent={() => <View style={{width: 5}} />}
              renderItem={({item}) => this._renderItem(item)}
              data={services}
            />
          </View>
     </View>

    );
  }
}


 const styles = StyleSheet.create({
  text: {
   fontSize: 28,
   padding: 10
  }
 });


const services = [
  {
    key: 1,
    name: 'Joao & Maria',
    image: 'http://img.olx.com.br/images/81/814607091546748.jpg'
  },
  {
    key: 2,
    name: 'Hospital Veterinário',
    image: 'http://www.hospitalmariopalmerio.uniube.br/imagem/landing/tinypng/logoMPHU.png'
  },
  {
    key: 3,
    name: 'Hospital Veterinário',
    image: 'http://donome.com.br/wp-content/uploads/2012/07/Hospital-Universit%C3%A1rio-de-Get%C3%BAlio-Vargas-Endere%C3%A7o-Telefone-e-Site.jpg'
  },
  {
    key: 4,
    name: 'TCC Universitário',
    image: 'https://static.wixstatic.com/media/01d51e_667bc04428e4457b9c1ee30ad1baceee.jpg'
  },
  {
    key: 5,
    name: 'Hospital Veterinário',
    image: 'http://www.hospitalmariopalmerio.uniube.br/imagem/landing/tinypng/logoMPHU.png'
  },
  {
    key: 6,
    name: 'Hospital Veterinário',
    image: 'http://donome.com.br/wp-content/uploads/2012/07/Hospital-Universit%C3%A1rio-de-Get%C3%BAlio-Vargas-Endere%C3%A7o-Telefone-e-Site.jpg'
  },
  {
    key: 7,
    name: 'TCC Universitário',
    image: 'https://static.wixstatic.com/media/01d51e_667bc04428e4457b9c1ee30ad1baceee.jpg'
  }

]

export default Service
