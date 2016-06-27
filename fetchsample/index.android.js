/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  View
} from 'react-native';
import renderIf from './renderIf'

class fetchsample extends Component {

  constructor(){
    super();
    this.state ={
      responseData:null,
       animating: true,
       status:false
    }
  }
  toggleStatus(){

  this.setState({
    status:!this.state.status
  });
  console.log('toggle button handler: '+ this.state.status);
  }

  render() {
    return (
      <View style={styles.container}>
       {renderIf(this.state.status)(
         <Text style={styles.welcome}>
         I am dynamic text View
         </Text>
       )}

        <TouchableHighlight onPress={()=>this.toggleStatus()}>
          <Text> touchme </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('fetchsample', () => fetchsample);
