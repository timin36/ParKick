import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import SubmitCom from '../components/submitCom'


const Review = ({navigation}) => {

  const route = useRoute();
  const lotid = route.params.lotid;

  const [com,setCom] = useState("");
  const [userID,setUserID] = useState('예시'); 

    return (
      <View style={styles.main}>
        <TextInput
        style={styles.input}
        placeholder="내용을 입력해주세요"
        onChangeText={(com)=>{setCom(com)}}
        numberOfLines={10}
        multiline
        />
        <TouchableOpacity style = {styles.to} onPress = {()=>{ subCom(lotid, com, userID);
                                                               toastMsg('코멘트가 등록되었습니다.');
                                                               navigation.reset({routes: [{name: 'Recommend'}]}) }} >
         <Text style = {styles.but}>평가 등록</Text></TouchableOpacity>
        </View>
  );
}

function subCom(lotid, com, userID){
  fetch('http://118.67.131.50/parklots/com', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
     },
        body: JSON.stringify({
        no: lotid,
        user: userID,
        comment: com
     })})
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    })
    .catch(console.log('코멘트안써짐 지금'));  

}

function toastMsg(msg){
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
        paddingTop: 20,
        alignItems: "center",
    },
    input: {
        width: '80%',
        height: '80%',
        fontSize: 25,
        borderWidth: 1,
        borderColor: '#4EA6D9',
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10
    },
    to: {
        width: '40%',
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
export default Review