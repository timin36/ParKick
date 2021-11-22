import React, {Component, useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Recommend from "./src/screens/Recommend";
import Input from "./src/screens/Input";
import Review from "./src/screens/Review";
import Circle from "./src/components/Circle";
import Parking from "./src/screens/Parking";
import Loading from "./src/screens/Loading";

const Stack = createNativeStackNavigator();

const App = () => {

  const [isLoading,setisLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{   
      setisLoading(false);
    },3000)

  },[])


  if(isLoading){
    return(
      <Loading />
    )
  } 

    return (
      <NavigationContainer>
          <Stack.Navigator
            initialRouteName = {"Home"}>
            <Stack.Screen options={{ title: 'PARKICK',headerStyle: {
            backgroundColor: '#D0E6FF',
          }}} name="Home" component={Home} />
            <Stack.Screen 
              options={{ headerShown: false}}
              name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false}} name="Signup" component={Signup} />
            <Stack.Screen options={{ title: 'PARKICK', headerStyle: {
            backgroundColor: '#D0E6FF',
          },}} name="Recommend" component={Recommend} />
            <Stack.Screen options={{ headerShown: false }} 
          name="Input" component={Input} />
            <Stack.Screen name="Circle" component={Circle} />
            <Stack.Screen name="Parking" component={Parking} />
            <Stack.Screen name="Review" component={Review} />
          </Stack.Navigator>
      </NavigationContainer>
    )
}
export default App
//<Stack.Screen name="Circle" component={Circle} />