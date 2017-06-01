import React, { Component } from 'react';
import {

} from 'react-native';
import {
  List,
  ListItem,
  Card,
  Text
} from 'native-base';

class CardList extends Component {
  render(){
    return(
      <List>
        <ListItem itemDivider>
          <Text style={{fontWeight: 'bold'}}>Salada</Text>
        </ListItem>
        <ListItem >
          <Text>Aaron Bennet</Text>
        </ListItem>
        <ListItem>
          <Text>Ali Connors</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text style={{fontWeight: 'bold'}}>Acompanhamento</Text>
        </ListItem>
        <ListItem>
          <Text>Bradley Horowitz</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text style={{fontWeight: 'bold'}}>Guarnição</Text>
        </ListItem>
        <ListItem>
          <Text>Bradley Horowitz</Text>
        </ListItem>
        <ListItem>
          <Text>Bradley Horowitz</Text>
        </ListItem>
        <ListItem>
          <Text style={{fontWeight: 'bold'}}>Suco</Text>
        </ListItem>
        <ListItem>
          <Text>Bradley Horowitz</Text>
        </ListItem>
        <ListItem>
          <Text>Bradley Horowitz</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text style={{fontWeight: 'bold'}}>Carnes</Text>
        </ListItem>
        <ListItem>
          <Text>Bradley Horowitz</Text>
        </ListItem>
        <ListItem>
          <Text>Bradley Horowitz</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text style={{fontWeight: 'bold'}}>Sobremesa</Text>
        </ListItem>
        <ListItem>
          <Text>Bradley Horowitz</Text>
        </ListItem>
        <ListItem>
          <Text>Bradley Horowitz</Text>
        </ListItem>
      </List>
    );
  }
}


export default CardList
