import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const Input = ({navigation}) => {

    const route = useRoute();
    console.log(route.params.point);

    const poi = route.params.point;
    //{point.latitude} | {point.longitude}
    const [selected_1,setSelect1] = useState(false);
    const [selected_2,setSelect2] = useState(false);


    return (
      <View style = {styles.main}>
        <TextInput
        style={styles.name}
        placeholder="주차장 이름"/>
       <Text style = {styles.name}>{poi.latitude}</Text>
       <Text style = {styles.name}>{poi.longitude}</Text>   
       <View style = {styles.wrapper}>
         <Text style = {styles.name_1}>주차장 추천</Text><CheckBox value={selected_1} onValueChange ={setSelect1}/> 
         <Text style = {styles.name_1}>주차장 금지</Text><CheckBox value={selected_2} onValueChange ={setSelect2}/>
       </View>
       <TouchableOpacity style = {styles.to} onPress = {()=>navigation.pop()}><Text style = {styles.but}>등록</Text></TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  main:{
      width:'100%',
      height: '100%',
      backgroundColor: '#D0E6FF',
      alignItems: "center",
      paddingTop: 20,
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