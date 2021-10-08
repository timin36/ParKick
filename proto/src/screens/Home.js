import React, { useState,useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Label,
} from 'react-native';

import MapView from 'react-native-maps';
import { Permission , PERMISSION_TYPE } from '../AppPermission';
import Geolocation from '@react-native-community/geolocation';

async function locationAccess () {
    Permission.checkPermission(PERMISSION_TYPE.location)//.then((value)=>{console.log("checkPermission value: ",value);})
}


const Home = ({navigation}) => {
  
  const [location,setLocation] = useState({"latitude" : 0 ,"longitude": 0});

  locationAccess().then(()=>{console.log("permission check");})

  Geolocation.getCurrentPosition( 
    pos => { console.log(pos.coords); 
             setLocation(pos.coords);
            }, //pos.coords에 위치
    err => { console.log(err); },    //error 발생시 출력
    { enableHighAccuracy: true, timeout: 1000, maximumAge: 0, }, );
    //높은 정확도, timeout, 이전 저장값 사용 시 timeout

  console.log(location);

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
        title = {'A'}/>
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
  }

});

export default Home;
