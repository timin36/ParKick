import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Review = ({navigation}) => {
    return (
      <View style={styles.main}>
        <TextInput
        style={styles.input}
        placeholder="내용을 입력해주세요"
        numberOfLines={10}
        multiline
        />
        <TouchableOpacity style = {styles.to} onPress = {()=>navigation.pop()}><Text style = {styles.but}>평가 등록</Text></TouchableOpacity>
        </View>
  );
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