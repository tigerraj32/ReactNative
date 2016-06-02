import React, {Component} from 'react';
import {
  StyleSheet,
  ListView,
  PropTypes,
  TouchableHighlight,
  View,
  Text
} from 'react-native';

export default class Cell extends Component {
  static contextTypes = {
   onSelectMenuOption: React.PropTypes.func.isRequired
 };
 onSelectCell(item){
   console.log('onselect cell: '+ item + ' sectionID: '+ this.props.sectionID + ' rowID: '+ this.props.rowID);

   this.context.onSelectMenuOption(item);
 }
  render(){
    return(
      <TouchableHighlight
        onPress={() =>this.onSelectCell(this.props.cellItem)}
         underlayColor='gray' >

          <View style={{height:44, alignItems:'center', justifyContent:'center'}}>
            <Text> {this.props.cellItem}</Text>
          </View>

      </TouchableHighlight>
    );
  }
}
