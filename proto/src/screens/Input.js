import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import MapView from 'react-native-maps';

const Input = ({navigation}) => {

    const route = useRoute();
    console.log(route.params.point);

    const poi = route.params.point;
    //{point.latitude} | {point.longitude}
    const [selected_1,setSelect1] = useState(false);
    const [selected_2,setSelect2] = useState(false);
    const [parkname,setParkname] = useState("");

    return (
      <View style = {styles.main}>
        <TextInput
        style={styles.name}
        placeholder="주차장 이름"
        onChangeText={(parkname)=>{setParkname(parkname)}}/>
        <Text style={{lineHeight: 10}}>{"\n"}</Text>
       <View style = {styles.mapwra}>
       <MapView
        style = {styles.map}
        initialRegion={{
        latitude: poi.latitude,
        longitude: poi.longitude,
        latitudeDelta: 0.0005,
        longitudeDelta: 0.0005,
        }} 
        >
        <MapView.Marker
        coordinate={{latitude: poi.latitude, 
                     longitude: poi.longitude }}>
        <Image source= {require('../../assets/imges/poi.jpg')} style={{ width: 15, height: 15 }} />
        </MapView.Marker>
        </MapView></View>
        <Text style={{lineHeight: 5}}>{"\n"}</Text> 
       <View style = {styles.wrapper}>
         <Text style = {styles.name_1}>주차장 추천</Text><CheckBox value={selected_1} onValueChange ={setSelect1}/> 
         <Text style = {styles.name_1}>주차장 금지</Text><CheckBox value={selected_2} onValueChange ={setSelect2}/>
       </View>
       <TouchableOpacity style = {styles.to} onPress = {()=>{
                                                            if(selected_1 && !selected_2) {send_zone(poi.latitude, poi.longitude,parkname); navigation.pop(); }
                                                            else if(selected_2 && !selected_1) {console.log("금!지!"); navigation.pop(); }
                                                            else if(!selected_2 && !selected_1) checkexception('주차장 추천/금지를 선택해주세요');
                                                            else if(selected_2 && selected_1) checkexception('추천과 금지는 하나만 선택할 수 있습니다')}}>
      <Text style = {styles.but}>등록</Text></TouchableOpacity>
      </View>
  );
}

function send_zone(lat, lon, name){
  fetch('http://118.67.131.50/zones', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      zoneid: name,
      latitude: lat,
      longitude: lon
    })})
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function checkexception(msg){
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  } else {
    AlertIOS.alert(msg);
  }
}



const styles = StyleSheet.create({
  main:{
      width:'100%',
      height: '100%',
      backgroundColor: '#D0E6FF',
      alignItems: "center",
      paddingTop: 20,
  },
  map:{
    width: '100%',
    height: 120,
  },
  mapwra:{
    width: '80%',
    height: 120,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    overflow: 'hidden'
  },
  name: {
    width: '80%',
    fontSize: 25,
    borderWidth: 1,
    borderColor: '#4EA6D9',
    borderRadius: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    textAlign: 'center',
    marginTop: 10,
},
  name_1:{
    fontSize: 20,
    textAlign: 'center',
    margin: 0
  },
  wrapper:{
    width: '80%',
    borderWidth: 1,
    borderColor: '#4EA6D9',
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    overflow: 'hidden',
    textAlign: 'center',
    marginTop: 10,  
    flexDirection: "row", 
  },
  to: {
    width: '30%',
    alignItems: "center",
  },
  but: {
    width: '80%',
    height: 40,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#4EA6D9',
    borderRadius: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 7
  }
});
export default Input