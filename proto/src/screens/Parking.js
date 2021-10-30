import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

export default class Parking extends Component {


  render(){

    const p_name = this.props.route.params.name
    const coor = this.props.route.params.coordinate
    //{p_name}
    //{coor.latitude} | {coor.longitude}
    return (
      <View style = {styles.main}>
          <Text style = {styles.name}>{p_name}</Text>
          <Text style = {styles.name}>{coor.latitude} | {coor.longitude}</Text>
          <Text style = {styles.name}>dede</Text>
          <Text style = {styles.mid}>내용</Text>
        </View>
    );
  }
}
//<Button title = "확인"></Button>

const styles = StyleSheet.create({
    main:{
        width:'100%',
        height: '100%',
        backgroundColor: '#D0E6FF',
        alignItems: "center",
        paddingTop: 20,
    }
    ,
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
    mid: {
      width: '80%',
      height: 400,
      fontSize: 20,
      borderWidth: 1,
      borderColor: '#4EA6D9',
      borderRadius: 20,
      backgroundColor: 'white',
      overflow: 'hidden',
      textAlign: 'center',
      marginTop: 10,
      paddingTop: 20,
  }
});