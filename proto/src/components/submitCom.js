import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';

const rate = (props) => {

  const [userID,setUserID] = useState('예시'); 
 
    useEffect(() => {
        fetch('http://118.67.131.50/parklots/com', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
             },
                body: JSON.stringify({
                no: props.lotid,
                user: userID,
                comment: props.com
             })})
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            })
            .catch(console.log('코멘트안써짐 지금'));
    }, []);

    return (<></>)
}


function toastMsg(msg){
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      AlertIOS.alert(msg);
    }
  }

const styles = StyleSheet.create({
  te: {
     color: 'black',
     fontSize: 20,
   }
})
export default rate