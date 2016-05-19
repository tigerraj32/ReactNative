/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 /**
  * Sample React Native App
  * https://github.com/facebook/react-native
  */

 import React, { Component,PropTypes } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';

 class SampleComponent extends Component {
   render(){
     return(
       <Text onPress = {this.props.incrementCount}> Press here to increase count  </Text>
     );
   }
 }

 SampleComponent.propsTypes = {
   incrementCount: React.PropTypes.func.isRequired,
 }

 class PropsAndState extends Component {

   constructor(props) {
     super(props);
     this.incrementCount = this.incrementCount.bind(this);
     this.state = {
       val: 0,
     }
   }

   incrementCount(){
     console.log('<><><><><><><><><><><><><><>');
     result = this.state.val + 1;
     this.setState({val: result});
   }

   render() {
     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>
           {this.state.val}
         </Text>
         <SampleComponent style={styles.instructions}  incrementCount= {this.incrementCount}/>
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

 
AppRegistry.registerComponent('PropsAndState', () => PropsAndState);
