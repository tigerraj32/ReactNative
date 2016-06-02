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
  PropTypes,
  View
} from 'react-native';

const SideMenu = require('react-native-side-menu');
import Menu from './Menu';
import ListMenu from './ListMenu';
import eMENU from './e-menu';


class context extends Component {
    static childContextTypes = {
        onSelectMenuOption: React.PropTypes.func.isRequired
      };

       getChildContext() {
        return {
          onSelectMenuOption: (item) => this.selectedItem(item)
        };
      }

  constructor(){
    super();
    this.state = {
      isOpen: false,
      selectedItem: eMENU.About.toString(),
    };

    this.selectedItem = this.selectedItem.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('toggle');
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }
  selectedItem(item: Object){
    console.log('selectedItem: '+ item);
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  render() {

      const menu =<ListMenu onItemSelected = {this.selectedItem}/>
      console.log(this.state.selectedItem + " " + eMENU.About.toString());
      var cont = null;
      if (this.state.selectedItem == eMENU.About.toString()) {
        console.log('if statement');
        cont = <ContentView toggleSideMenu = {this.toggle} content ='About Component rendering' />
      }
      else {
        console.log('else statement');
        cont = <ContentView toggleSideMenu = {this.toggle} content = 'Contact Component rendering'/>
      }
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}
        >
        {cont}

       </SideMenu>
    );
  }
}

class ContentView extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}  onPress={() => this.props.toggleSideMenu()}>
          Welcome to React Native! + {this.props.content}
        </Text>

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



AppRegistry.registerComponent('context', () => context);
