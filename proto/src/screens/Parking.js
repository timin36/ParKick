import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Comment from '../components/Comment'
import Rate from '../components/rate'

export default class Parking extends Component {

  constructor(props){
    super(props);
    this.state = {
      count_like : props.route.params.like,
      count_dislike : props.route.params.dislike
    }
  }
 
  state = {
    like: false,
    dislike: false,
    count_like: 0,
    count_dislike: 0,
    toggle_left: false,
    toggle_right: false
  };
  
  setLike = () => {
    this.setState({
      like: !(this.state.like),
      toggle_left: true,
    });
  };
  setdisLike = () => {
    this.setState({
      dislike: !(this.state.dislike),
      toggle_right: true,
    });
  };

  render(){

    const p_name = this.props.route.params.name
    const coor = this.props.route.params.coordinate
    const login = this.props.route.params.login
    const lotid = this.props.route.params.lotid
    const _id = this.props.route.params._id
    //{p_name}
    //{coor.latitude} | {coor.longitude}
    return (
      <View style = {styles.main}>
          <Text style = {styles.name}>{p_name} {lotid}</Text>
          <Text style = {styles.name}>{coor.latitude} | {coor.longitude}</Text>
          { login &&  
            <Text style = {styles.name_}>
              <MaterialCommunityIcons onPress={() => {this.setLike();}} name = {this.state.like ? "thumb-up" : "thumb-up-outline"} size={30}></MaterialCommunityIcons>
              {this.state.like && <Rate pmt = {1} lotid = {_id}/>}
              {this.state.toggle_left && !this.state.like && <Rate pmt = {1} lotid = {_id}/>} 
              <Text> {this.state.like ? this.state.count_like+1 : this.state.count_like}</Text>
              <Text>      </Text>
              <MaterialCommunityIcons onPress={() => {this.setdisLike();}} name = {this.state.dislike ? "thumb-down" :  "thumb-down-outline"} size={30}></MaterialCommunityIcons>
              {this.state.dislike && <Rate pmt = {2} lotid = {_id}/>}
              {this.state.toggle_right && !this.state.dislike && <Rate pmt = {2} lotid = {_id}/>} 
              <Text> {this.state.dislike ? this.state.count_dislike+1 : this.state.count_dislike}</Text>
            </Text>
            }
          { !login &&
            <Text style = {styles.name_}>
            <MaterialCommunityIcons name =  "thumb-up-outline" size={30}></MaterialCommunityIcons>
            <Text> {this.state.count_like}</Text>
            <Text>      </Text>
            <MaterialCommunityIcons name = "thumb-down-outline" size={30}></MaterialCommunityIcons>
            <Text> {this.state.count_dislike}</Text>
          </Text>
          }
          <Text style = {styles.mid}><Comment num={lotid} /></Text>
          { login && 
          <TouchableOpacity style = {styles.to} onPress = {()=>this.props.navigation.navigate('Review',{lotid: lotid})}><Text style = {styles.but}>평가 등록</Text></TouchableOpacity>
          }
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
    name_: {
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
      height: 360,
      fontSize: 20,
      borderWidth: 1,
      borderColor: '#4EA6D9',
      borderRadius: 20,
      backgroundColor: 'white',
      overflow: 'hidden',
      textAlign: 'center',
      marginTop: 10,
      paddingTop: 20,
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