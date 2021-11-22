import React, { Component, useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';

import Comment from './Comment'
import Marker from 'react-native-maps';
import MapView from 'react-native-maps';
const Circle = () => {


  return(
    <View>
      <Text>뭐 되는게 없네</Text>
      <MapView 
        style = {styles.main_map}
        initialRegion={{
        latitude: 37.584061229881925,
        longitude: 127.05877709643458,
        latitudeDelta: 0.005,
        longitudeDelta: 0.002,
      }}
      />
    </View>
  )
}

// export default class Circle extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//         dat: null
//     }
//   }

//   componentDidMount() {
//     fetch('http://118.67.131.50/parklots/no/2')
//         .then(res => res.json())
//         .then(data => {console.log(data);
//           this.setState({dat : data})
//         });
//   }

//   render(){

//     const { Circle } = this.state;
//     const commentList = Circle.map(park=>{
//         <Text>
//         {park._id}
//         </Text>
//     });

//     return(
//       <View><Text>gk TLqkf</Text>
//       <Button title = "press"></Button>
//         {commentList}
//       </View>
//     )

//   }

// }



const styles = StyleSheet.create({
 main_map: {
    width: '100%',
    height: '100%',
  },
  scroll:{marginTop:16, backgroundColor:'gray'},
  text:{padding:8, color:'white'}, 
});

export default Circle;