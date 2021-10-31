import React, { useState,useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Label,
  Text,
} from 'react-native';

import MapView from 'react-native-maps';
import { Permission , PERMISSION_TYPE } from '../AppPermission';
import Geolocation from '@react-native-community/geolocation';

async function locationAccess () {
    Permission.checkPermission(PERMISSION_TYPE.location)//.then((value)=>{console.log("checkPermission value: ",value);})
}


const Home = ({navigation}) => {
  
  const [location,setLocation] = useState({"latitude" : 0 ,"longitude": 0});

  locationAccess()//.then(()=>{console.log("permission check");})

  Geolocation.getCurrentPosition( 
    pos => { //console.log(pos.coords); 
             setLocation(pos.coords);
            }, //pos.coords에 위치
    err => { console.log(err); },    //error 발생시 출력
    { enableHighAccuracy: true, timeout: 1000, maximumAge: 0, }, );
    //높은 정확도, timeout, 이전 저장값 사용 시 timeout

  //console.log(location);

  const mark_1 = {
    name: '시립대 주차존 01',
    coordinate: {
      latitude: 37.5840, 
      longitude: 127.0587
    }
  }

  return (
    <View style = {{flex: 1}}>
    <MapView
      style = {styles.main_map}
      initialRegion={{
        latitude: 37.584061229881925,
        longitude: 127.05877709643458,
        latitudeDelta: 0.005,
        longitudeDelta: 0.002,
      }}
    >
    <MapView.Marker
        coordinate={{latitude: location.latitude, 
                     longitude: location.longitude }}
        title = {'현재 위치'}
        pinColor = 'blue'/>

    <MapView.Marker
        coordinate={{latitude: 37.5840, 
                     longitude: 127.0587 }}
        title = {'ex'}
        onCalloutPress={()=>navigation.navigate('Parking',{
          name: mark_1.name,
          coordinate: {
            latitude: mark_1.coordinate.latitude, 
            longitude: mark_1.coordinate.longitude
          }, //나중에 api연결하면 변수 치환
          login: false
        })}>
        <MapView.Callout tooltip={true}>
          <View style={styles.pop}>
            <Text>{mark_1.name}</Text>
            <Text>☆ 13</Text>
            <Text>description 01</Text>
          </View>
        </MapView.Callout>
      </MapView.Marker>

      </MapView>
    <View style = {styles.btn}>
      <Button title=" + "
              onPress={() => navigation.navigate('Login')}
      />
    </View>
    </View>
  );

}

const styles = StyleSheet.create({
  main_map: {
    width: '100%',
    height: '100%',
  },
  btn:{
    position: 'absolute',
    right: 30,
    bottom: 40,
  },
  pop: {
    backgroundColor : 'white',
 //   paddingtop: 5,
    padding: 5
  }
});

export default Home;
