import React, {Component, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Circle from "./src/components/Circle";

const Stack = createNativeStackNavigator();

export default class App extends Component {


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
