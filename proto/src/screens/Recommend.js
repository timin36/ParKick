import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import MapView from 'react-native-maps';
import Poi from '../../assets/imges/poi.jpg' //마커 이미지 import
import parklots from './poi.json';

const Recommend = ({navigation}) => {

  const [poi,setpoi] = useState(null);
  const [checked, setChecked] = useState(false);

  clickpoint=(e)=>{
    const point = e.nativeEvent
    setpoi(point);
    setChecked(true);
  }

  const mark_1 = {
    name: '시립대 주차존',
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
        {parklots.map(park=> {
        return(
          <MapView.Marker
            coordinate={{latitude: park.latitude, 
                     longitude: park.longitude }}
            key = {park.lotid} 
            onCalloutPress={()=>navigation.navigate('Parking',{
              name: mark_1.name,
              lotid: park.lotid,
              coordinate: {
              latitude: park.latitude, 
              longitude: park.longitude
              },
              like:park.rate.like,
              dislike:park.rate.dislike,
              login: true
            })} >
          <MapView.Callout tooltip={true}>
            <View style={styles.pop}>
              <Text>{mark_1.name} {park.lotid}</Text>
              <Text>☆ {park.rate.like}</Text>
              <Text>description {park.lotid}</Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
        )

      })}

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