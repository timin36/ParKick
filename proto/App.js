import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Recommend from "./src/screens/Recommend";
import Input from "./src/screens/Input";
import Review from "./src/screens/Review";
import Circle from "./src/components/Circle";
import OnPoiClick from "./src/components/OnPoiClick";
import Parking from "./src/screens/Parking";

const Stack = createNativeStackNavigator();

export default class App extends Component {


  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator
            initialRouteName = {"Recommend"}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Recommend" component={Recommend} />
            <Stack.Screen name="Input" component={Input} />
            <Stack.Screen name="Circle" component={Circle} />
            <Stack.Screen name="Parking" component={Parking} />
            <Stack.Screen name="OnPoiClick" component={OnPoiClick} />
            <Stack.Screen name="Review" component={Review} />
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

//<Stack.Screen name="Circle" component={Circle} />