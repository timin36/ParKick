import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';

import MapView from 'react-native-maps';
import { Callout, Marker } from 'react-native-maps';
import Poi from '../../assets/imges/poi.jpg'


const Recommend = ({navigation}) => {
    return (
      <View>
        <MapView
          style = {styles.main_map}
          initialRegion={{
          latitude: 37.584061229881925,
          longitude: 127.05877709643458,
          latitudeDelta: 0.005,
          longitudeDelta: 0.002,
        }} >
        <MapView.Marker
        coordinate={{latitude: 37.5840, 
                     longitude: 127.0587 }}
        title = {'ex'}
        onCalloutPress={()=>navigation.navigate('Parking',{
          name: '시립대 주차존 01',  //나중에 api연결하면 변수 치환
          coordinate: {
            latitude: 37.5840, 
            longitude: 127.0587
          }
        })}>
        <MapView.Callout tooltip={true}>
          <View style={styles.pop}>
            <Text>시립대 주차존 01</Text>
            <Text>☆ 13</Text>
            <Text>description 01</Text>
          </View>
        </MapView.Callout>
        </MapView.Marker>
      </MapView>
        <Button title="recommend" //style = {styles.btn}
              onPress={() => navigation.navigate('Input')}
        />
        </View>
  );
}
//<Image source = {Poi} /> 마커 크기 자체를 맞추는게 나을듯
const styles = StyleSheet.create({
  main_map: {
    width: '100%',
    height: '94%',
  },
  pop: {
    backgroundColor : 'white',
 //   paddingtop: 5,
    padding: 5
  }
  // btn:{
  //   position: "absolute",
  //   bottom: 5,
  //   width: '100%',
  //   fontSize: 20,
  // }
});

export default Recommend