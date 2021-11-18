import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Signup = ({navigation}) => {
    return (
        <View style = {styles.main}>
        <MaterialCommunityIcons 
        style = {styles.cancel}
        name = "arrow-left-circle-outline" size={30} 
        onPress={() => navigation.pop()} />
        
        <View style = {styles.mid}>
          <Text style = {styles.parkick}>PARKICK</Text>
          <TextInput style = {styles.txtinput} placeholder = "아이디입력"></TextInput>
          <Text style={{fontSize: 10}}> </Text>
          <TextInput style = {styles.txtinput} placeholder = "비밀번호입력" secureTextEntry={true}></TextInput>
          <TextInput style = {styles.txtinput} placeholder = "비밀번호확인" secureTextEntry={true}></TextInput>
          <Text style={{fontSize: 10}}> </Text>
          <TextInput style = {styles.txtinput} placeholder = "닉네임" secureTextEntry={true}></TextInput>
        
          <TouchableOpacity
            onPress={() => navigation.pop()}>
            <Text style = {styles._text}>회원가입 완료</Text>
          </TouchableOpacity>
        </View>
        </View>
    )
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
    mid:{
        position: 'absolute',
        top: 70,
        width: '80%',
        textAlign: 'center',
    },
    parkick:{
        fontSize: 30,
        marginBottom: 10,
    },
    txtinput: {
        color:'black',
        fontSize: 20,
        backgroundColor:'white',
        marginTop: 10,
        paddingLeft: 10,
        shadowColor: 'black',
        elevation: 5,
    },
    _text: {
        marginTop: 20,
        fontSize: 20,
    }
});

export default Signup
