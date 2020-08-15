import React from 'react';
import MapView from 'react-native-maps';

import { View } from 'react-native';

const App = () => 
    <View style={{ flex: 1 }}>
        <MapView 
        style={{ backgroundColor="#F125"}}
        region={{
            latitude: -16.720003,
            longitude: -49.242377,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
        }}
        showsUserLocation
        loadingEnabled
         />
    </View>;

export default App;