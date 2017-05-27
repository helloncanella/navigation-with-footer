import React, { Component } from 'react';
import {
 Text,
 View,
 Image,
 Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window')

const Slider = props => (
   <View style={styles.container}>
     <Image style={styles.image} source={props.uri} />
   </View>

)

const styles = {
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width

  }
}

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      imagesSlider: [
        require('../../images/banner1.png'),
        require('../../images/banner2.jpg'),
        require('../../images/banner3.jpg')
      ]
    }
  }

  render(){
    return(
        <View>
         <Swiper
           autoplay
           height={280}
           >
           {
             this.state.imagesSlider.map((item, index) => <Slider
               uri={item}
               key={index}
             />)
           }
         </Swiper>
        </View>
    )
  }


}
