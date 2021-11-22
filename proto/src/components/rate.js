import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
} from 'react-native';

const rate = (props) => {

  const [userID,setUserID] = useState('예시'); 
 
    useEffect(() => {
        fetch('http://118.67.131.50/parklots/rate', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
             },
                body: JSON.stringify({
                lotid: props.lotid,
                userid: userID,
                pmt: props.pmt
             })})
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            });
    }, []);

    return (<></>)
}


const styles = StyleSheet.create({
  te: {
     color: 'black',
     fontSize: 20,
   }
})
export default rate

