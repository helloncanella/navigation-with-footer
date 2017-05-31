import React, { Component } from 'react';
import {
  Text
} from 'react-native';

import {
  Container,
  Content,
  Grid,
  Row
} from 'native-base';

class CardBlock extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
                <Content>
                    <Grid>
                      <Row style={ [{backgroundColor: this.props.backgroundCol1},styles.row] }>
                        <Text style={styles.text}>
                          {
                            this.props.text
                          }
                        </Text>
                      </Row>
                    </Grid>
                </Content>
    );
  }
}

const styles = {
  row:{
    height: 80, flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3
  },
  text:{
    fontSize: 20,
    textAlign: 'center',
  }
}

export default CardBlock
