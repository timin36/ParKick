import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { Marker } from 'react-native-maps';

const MarkerCallout = ({...Marker}) => {
  return (
      <View style = {{flex: 1}}>
          <Text>First parking lot</Text>
          <Text>name</Text>
          <Button>jk</Button>
        </View>
  );
}
const styles = StyleSheet.create({
  nown: {
    
  },

});
export default MarkerCallout