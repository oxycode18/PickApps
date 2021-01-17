import React from 'react';
import {Text, View} from 'react-native';
import MapComponent from '../MapComponent';

const PupMaterial = () => {
    return (
        <View>
            <MapComponent />
            <Text style={{paddingTop:30, paddingLeft:16}}>Ojek TOSSA</Text>
        </View>
    )
}

export default PupMaterial;