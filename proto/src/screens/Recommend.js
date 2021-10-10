import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import MapView from 'react-native-maps';
import { Callout } from 'react-native-maps';
import MarkerCallout from "../components/MarkerCallout";

const Recommend = ({navigation}) => {
    return (
      <View>
        <MapView
          style = {styles.main_map}
          initialRegion={{
          latitude: 37.584061229881925,
          longitude: 127.05877709643458,
          latitudeDelta: 0.005,
          longitudeDelta: 0.002,
        }} >
        <MapView.Marker
        coordinate={{latitude: 37.5840, 
                     longitude: 127.0587 }}
        title = {'ex'}>
        <Callout>
          <MarkerCallout {...this} />
        </Callout>
        </MapView.Marker>
      </MapView>
        <Button title="recommend" //style = {styles.btn}
              onPress={() => navigation.navigate('Input')}
        />
        </View>
  );
}

const styles = StyleSheet.create({
  main_map: {
    width: '100%',
    height: '94%',
  },
  // btn:{
  //   position: "absolute",
  //   bottom: 5,
  //   width: '100%',
  //   fontSize: 20,
  // }
});

export default Recommend