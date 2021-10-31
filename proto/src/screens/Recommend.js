import React,{useState} from 'react';
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

  const [poi,setpoi] = useState(null);
  const [checked, setChecked] = useState(false);

  clickpoint=(e)=>{
    const point = e.nativeEvent
    setpoi(point);
    setChecked(true);
  }

    return (
      <View>
        <MapView
          style = {styles.main_map}
          initialRegion={{
          latitude: 37.584061229881925,
          longitude: 127.05877709643458,
          latitudeDelta: 0.005,
          longitudeDelta: 0.002,
          }} 
          onPress = {clickpoint}
          >
        <MapView.Marker
        coordinate={{latitude: 37.5840, 
                     longitude: 127.0587 }}
        title = {'ex'}
        onCalloutPress={()=>navigation.navigate('Parking',{
          name: '시립대 주차존 01',  //나중에 api연결하면 변수 치환
          coordinate: {
            latitude: 37.5840, 
            longitude: 127.0587
          },
          login: true
        })}>
        <MapView.Callout tooltip={true}>
          <View style={styles.pop}>
            <Text>시립대 주차존 01</Text>
            <Text>☆ 13</Text>
            <Text>description 01</Text>
          </View>
        </MapView.Callout>
        </MapView.Marker>

        {poi && (
            <MapView.Marker coordinate={poi.coordinate}
            pinColor = 'blue'
            />
          )}

      </MapView>
      {checked && (
        <View style = {styles.btn}>
      <Button title="P"
              onPress={() => navigation.navigate('Input',{
                point: poi.coordinate
              })}
      />
    </View>
      )}
        </View>
  );
}
//<Image source = {Poi} /> 마커 크기 자체를 맞추는게 나을듯
const styles = StyleSheet.create({
  main_map: {
    width: '100%',
    height: '100%',
  },
  pop: {
    backgroundColor : 'white',
 //   paddingtop: 5,
    padding: 5
  },
  btn:{
    position: 'absolute',
    right: 30,
    bottom: 40,
    fontSize: 20,
  }
});

export default Recommend