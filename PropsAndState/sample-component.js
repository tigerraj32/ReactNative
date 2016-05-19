'use strict';
import React,{ Component} from 'react';
import {
  Text,
  View
} from 'react-native';

export default class SampleComponent extends Component {
  render(){
    return(
      <Text onPress = {this.props.incrementCount}> Press here to increase count  </Text>
    );
  }
}
