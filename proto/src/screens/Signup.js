import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  AlertIOS,
  ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Signup = ({navigation}) => {

    const [userid,setUserid] = useState("");
    const [password,setPassword] = useState("");
    const [passwordcheck,setPasswordcheck] = useState("");
    const [name,setName] = useState("");
    const [nickname,setNickname] = useState("");
    const [email,setEmail] = useState("");

    return (
        <View style = {styles.main}>
        <MaterialCommunityIcons 
        style = {styles.cancel}
        name = "arrow-left-circle-outline" size={30} 
        onPress={() => navigation.pop()} />
        
        <View style = {styles.mid}>
          <Text style = {styles.parkick}>PARKICK</Text>
          <TextInput style = {styles.txtinput} placeholder = "아이디입력" onChangeText={(userid)=>{setUserid(userid)}}></TextInput>
          <Text style={{fontSize: 10}}> </Text>
          <TextInput style = {styles.txtinput} placeholder = "비밀번호입력" onChangeText={(password)=>{setPassword(password)}} secureTextEntry={true}></TextInput>
          <TextInput style = {styles.txtinput} placeholder = "비밀번호확인" onChangeText={(passwordcheck)=>{setPasswordcheck(passwordcheck)}} secureTextEntry={true}></TextInput>
          <Text style={{fontSize: 10}}> </Text>
          <TextInput style = {styles.txtinput} placeholder = "이름" onChangeText={(name)=>{setName(name)}}></TextInput>
          <TextInput style = {styles.txtinput} placeholder = "닉네임" onChangeText={(nickname)=>{setNickname(nickname)}}></TextInput>
          <TextInput style = {styles.txtinput} placeholder = "이메일" onChangeText={(email)=>{setEmail(email)}}></TextInput>
          <TouchableOpacity
            onPress={() => {if(submitbutton(userid, password, passwordcheck, name, nickname, email) == true) navigation.pop();}}>
            <Text style = {styles._text}>회원가입 완료</Text>
          </TouchableOpacity>
        </View>
        </View>
    )
}

function submitbutton(userid, password, passwordcheck, name, nickname, email) {

    if(password != passwordcheck){
        toastMsg('비밀번호가 다릅니다.');
        return false;
    }
    if(userid.includes( '~' )){
      toastMsg('아이디에 특수문자가 포함되어 있습니다.');
      return false;
    }
    if(!email.includes( '@' )){
      toastMsg('이메일 형식에 맞춰 입력해주세요.');
      return false;
    }
    //if() 특수문자 검사
    //이메일 형식 검사

    else{
    fetch('http://118.67.131.50/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: userid,
      pwd: password,
      name: name,
      nickname: nickname,
      email: email
    })})
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
    return true;
    }
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
