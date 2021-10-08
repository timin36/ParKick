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

  constructor(){
    super();
    this.state={
        text:"",
    };
}


  render(){
    return(
      <View style={{flex:1, padding:16}}>
          <Button title="fetch data from network" onPress={this.fetchdata}></Button>
          <ScrollView style={styles.scroll}>
              {/* Text에 보여줄 글씨는 바뀔 것이므로 state변수로 사용*/}
              <Text style={styles.text}>{this.state.text}</Text> 
          </ScrollView>
      </View>
  );
  }
  fetchdata = ()=>{
    fetch('https://127.0.0.1:3001/api/users/1')
      .then(response=>response.text())
      .then(responseText=>{
          // responeseJson : Json 객체임
          this.setState({text:responseText})
          .catch((e)=>{
            console.log(e)
            console.log("hey...........")
          })
      });
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

