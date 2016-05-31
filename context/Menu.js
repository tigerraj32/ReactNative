import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Menu extends Component {
  render(){
    return(
       <View style={{backgroundColor:'red', flex:1}}>
       <Text
          style={{margin:50}}
         onPress={() => this.props.onItemSelected('About')}>
         About
       </Text>

       <Text
          style={{margin:50}}
         onPress={() => this.props.onItemSelected('Contacts')}>

         Contacts
       </Text>
       </View>
       );
  }
}
