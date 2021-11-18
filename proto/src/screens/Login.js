import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({navigation}) => {
  return (
      <View style = {styles.main}>
        <MaterialCommunityIcons 
        style = {styles.cancel}
        name = "arrow-left-circle-outline" size={30} 
        onPress={() => navigation.pop()}>
        </MaterialCommunityIcons>
        <View style = {styles.mid}>
          <Text style = {styles.parkick}>PARKICK</Text>

          <View style = {styles.container}>
          <MaterialCommunityIcons name = "account" size={20} style = {{marginLeft: 8}}/>
          <TextInput style = {styles.txtinput} placeholder = "ID"></TextInput>
          </View>
          <View style = {styles.container}>
          <MaterialCommunityIcons name = "lock" size={20} style = {{marginLeft: 8}}/>
          <TextInput style = {styles.txtinput} placeholder = "PASSWORD" secureTextEntry={true} ></TextInput>
          </View>

          <View style = {{flex: 1, flexDirection:'row', marginTop: 20}}>
            <TouchableOpacity
                onPress={() => navigation.reset({routes: [{name: 'Recommend'}]})} >
            <Text style = {styles._text}>로그인</Text>
            </TouchableOpacity>
            <Text style = {styles._text}> | </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Signup')} >
              <Text style = {styles._text}>회원가입</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
  );
}
const styles = StyleSheet.create({
  main:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D0E6FF',
  },
  cancel:{
    position: 'absolute',
    top: 20,
    left: 20
  },
  parkick:{
    fontSize: 30
  },
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
  },
  mid:{
    position: 'absolute',
    top: '30%',
    width: '80%',
    textAlign: 'center',
  },
  txtinput: {
    flex: 1,
    color:'black',
    fontSize: 20,
    marginLeft: 15
  },
  _text: {
    fontSize: 20,
  }

});
export default Login
