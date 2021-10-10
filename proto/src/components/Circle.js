import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';

import MapView from 'react-native-maps';
import Marker from 'react-native-maps';


export default class Circle extends Component{


  render(){
    return(
      <View style={{flex:1}}>
          <Button title="fetch" ></Button>
          <ScrollView>
              <Text>example</Text> 
          </ScrollView>
      </View>
  );
  }
}


const styles = StyleSheet.create({
 main_map: {
    width: '100%',
    height: '100%',
  },
  scroll:{marginTop:16, backgroundColor:'gray'},
  text:{padding:8, color:'white'}, 
});

