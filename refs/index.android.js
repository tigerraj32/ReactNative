/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component, ReactDom } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
} from 'react-native';


class SlideLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:0
    }
  }

  render(){
    return(
      <Slider style={{width:100}}
              value={this.state.value}
              onSlidingComplete={this.props.update}
              minimumValue={0}
              maximumValue={100}
              step={1}
              onValueChange={(val) => this.setState({value:val})}
            />
    );
    }
}

class refs extends Component {
  constructor(props){
    super(props);
    this.state = {
      red:0,
      green:0,
      blue:0,
    }
    this.update = this.update.bind(this);
  }

  update(e){
    //console.log(this.refs);
    //console.log(this.refs.green.state.value);
    this.setState({
      red:this.refs.red.state.value,
      green:this.refs.green.state.value,
      blue:this.refs.blue.state.value,
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>RGB {this.state.red} {this.state.green} {this.state.blue} </Text>
      <SlideLayout ref='red' update={this.update}/>
      <SlideLayout ref='green' update={this.update}/>
      <SlideLayout ref='blue' update={this.update}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});

AppRegistry.registerComponent('refs', () => refs);
