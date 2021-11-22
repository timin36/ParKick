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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({navigation}) => {

    const route = useRoute();
    console.log(route.params.point);

    const poi = route.params.point;
    //{point.latitude} | {point.longitude}
    const [selected_1,setSelect1] = useState(false);
    const [selected_2,setSelect2] = useState(false);

    return (
      <View style = {styles.main}>
        <MaterialCommunityIcons 
        style = {styles.cancel}
        name = "arrow-left-circle-outline" size={30} 
        onPress={() => navigation.pop()} />
        <Text style= {styles.name}>주차장 추천</Text>
        <Text style={{lineHeight: 0}}>{"\n"}</Text>
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
        <Text style={{fontSize: 3}}>{"\n"}</Text> 
       <View style = {styles.wrapper}>
         <Text style = {styles.name_1}>주차장 추천</Text><CheckBox value={selected_1} onValueChange ={setSelect1}/> 
         <Text style = {styles.name_1}>주차장 금지</Text><CheckBox value={selected_2} onValueChange ={setSelect2}/>
       </View>
       <TouchableOpacity style = {styles.to} onPress = {()=>{
                                                            if(selected_1 && !selected_2) {send_zone(poi.latitude, poi.longitude,selected_1); navigation.pop(); checkexception('추천 되었습니다!'); }
                                                            else if(selected_2 && !selected_1) {send_zone(poi.latitude, poi.longitude,selected_1); navigation.pop(); checkexception('금지 추천 되었습니다!') }
                                                            else if(!selected_2 && !selected_1) checkexception('주차장 추천/금지를 선택해주세요');
                                                            else if(selected_2 && selected_1) checkexception('추천과 금지는 하나만 선택할 수 있습니다')}}>
      <Text style = {styles.but}>등록</Text></TouchableOpacity>
      </View>
  );
}

function send_zone(lat, lon, select){
  fetch('http://118.67.131.50/zones', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      suggest: select,
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
  } else if(Platform.OS === 'ios') {
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
    position: 'relative',
    top: '-2%',
    width: '50%',
    fontSize: 25,
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
    borderRadius: 10,
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
  },
  cancel:{
    position: 'absolute',
    top: 20,
    left: 20
},
});
export default Input