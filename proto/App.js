import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Circle from "./src/components/Circle";
import { Permission , PERMISSION_TYPE } from './src/AppPermission';

const Stack = createNativeStackNavigator();

export default class App extends Component {

  componentDidMount() {
      Permission.checkPermission(PERMISSION_TYPE.location).then((value)=>{
        if(value == true) alert("true");
        else alert("not true");
      })
  }

  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator
            initialRouteName = {"Home"}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Circle" component={Circle} />
          </Stack.Navigator>
        </NavigationContainer>
    )
  }
}
