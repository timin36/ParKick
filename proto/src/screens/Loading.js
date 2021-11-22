import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import logo from '../../assets/imges/logo.png'

const Loading = () => {

    return (
        <View style={{flex:1, justifyContent: 'center', flexDirection: 'column',alignItems: 'center'}}>
        <Image source = {logo} style = {styles.logo}></Image>
        </View>
    )

}
const styles = StyleSheet.create({
   logo:{
     width: 250,
     height: 250,
     
     
   }
  });
export default Loading
  