import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import MapView from 'react-native-maps';

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
        }}
      />
        <Button title="recommend"
              onPress={() => navigation.navigate('Input')}
        />
        </View>
  );
}

const styles = StyleSheet.create({
  main_map: {
    width: '100%',
    height: '100%',
  },
});

export default Recommend