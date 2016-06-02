import React, {Component} from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Text
} from 'react-native';

import Cell from './Cell';

var tableData = ["About", "Contact"];


export default class ListMenu extends Component{

  constructor(props, context){
    super(props, context);
    var dataSource = new ListView.DataSource(
        {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
      this.state = {
        dataSource: dataSource.cloneWithRows(tableData)
      };
  }

renderCell(item: Object,sectionID: number | string, rowID: number | string) {
    return (
      <Cell
         selectedRow = {()=>{this.selectedRow(item)}}
         cellItem={item}
         sectionID={sectionID}
         rowID={rowID}/>
    );
  }
  renderSeparator(sectionID: number | string,rowID: number | string, adjacentRowHighlighted: boolean ) {
    return (
      <View
        key={"SEP_" + sectionID + "_" + rowID}
        style={{  backgroundColor: 'rgba(0,0,0,0.1)',
          height: 1,
          marginLeft: 4}}/>
    );
  }
  render(){
    return(
      <View style={{backgroundColor:'red',flex:1}}>
        <ListView
            style={{marginTop:66}}
             dataSource={this.state.dataSource}
             renderRow={this.renderCell.bind(this)}
             renderSeparator={this.renderSeparator}
           />
    </View>
    );
  }
}
