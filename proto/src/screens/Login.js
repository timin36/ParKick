import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

const Login = ({navigation}) => {
  return (
      <View style = {{flex: 1}}>
          <Text>ID</Text><TextInput style = {styles.txtinput}></TextInput>
          <Text>PASSWORD</Text><TextInput style = {styles.txtinput}></TextInput>
          <Button title="login"
              onPress={() => navigation.navigate('Recommend')}
        />
        
        </View>
  );
}
const styles = StyleSheet.create({
  txtinput: {
    backgroundColor: 'white',
    color:'black',
    fontSize: 20,
  },

});
export default Login
