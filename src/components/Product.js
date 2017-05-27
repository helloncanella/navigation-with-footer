import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';

class Product extends Component{

     _renderItem(item){
       return(
         <Image style={{width: 120, height: 180 }} source={{uri: item.image}} />
       )
     }


    render(){
      return(
          <View style={{flex: 1}}>
            <View>
              <Text style={styles.text}>Produtos</Text>
              <FlatList
                horizontal
                ItemSeparatorComponent={() => <View style={{width: 5}} />}
                renderItem={({item}) => this._renderItem(item)}
                data={products}
              />
            </View>
       </View>

      );
    }
}

 const styles = StyleSheet.create({
  text:{
    fontSize: 28,
    padding: 10
  }
 });

const products = [
  {
    key: 1,
    name: 'Casaco UFSC',
    image: 'http://ced.ufsc.br/files/2016/06/IMG-20160515-WA0008.jpg'
  },
  {
    key: 2,
    name: 'Camisa UFSC',
    image: 'http://scontent.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/14540595_268237126909767_6705091286526853120_n.jpg'
  },
  {
    key: 3,
    name: 'Hospital Veterinário',
    image: 'http://donome.com.br/wp-content/uploads/2012/07/Hospital-Universit%C3%A1rio-de-Get%C3%BAlio-Vargas-Endere%C3%A7o-Telefone-e-Site.jpg'
  },
  {
    key: 4,
    name: 'Camisa UFSC',
    image: 'http://scontent.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/14540595_268237126909767_6705091286526853120_n.jpg'
  },
  {
    key: 5,
    name: 'Hospital Veterinário',
    image: 'http://donome.com.br/wp-content/uploads/2012/07/Hospital-Universit%C3%A1rio-de-Get%C3%BAlio-Vargas-Endere%C3%A7o-Telefone-e-Site.jpg'
  },
  {
    key: 6,
    name: 'Camisa UFSC',
    image: 'http://scontent.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/14540595_268237126909767_6705091286526853120_n.jpg'
  },
  {
    key: 7,
    name: 'Hospital Veterinário',
    image: 'http://donome.com.br/wp-content/uploads/2012/07/Hospital-Universit%C3%A1rio-de-Get%C3%BAlio-Vargas-Endere%C3%A7o-Telefone-e-Site.jpg'
  },
  {
    key: 8,
    name: 'Camisa UFSC',
    image: 'http://scontent.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/14540595_268237126909767_6705091286526853120_n.jpg'
  },
  {
    key: 9,
    name: 'Hospital Veterinário',
    image: 'http://donome.com.br/wp-content/uploads/2012/07/Hospital-Universit%C3%A1rio-de-Get%C3%BAlio-Vargas-Endere%C3%A7o-Telefone-e-Site.jpg'
  }

]

export default Product
