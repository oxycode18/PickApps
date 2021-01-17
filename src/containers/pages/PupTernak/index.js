import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import MapComponent from '../MapComponent';
import ActionButton from './ActionButton';

const PupTernak = () => {
    return (
        <View>
            <View style={{marginTop:30}}>
                <Text style={{textAlign:'center', marginBottom:5}}>Silahkan pilih Driver Ojek Pick-Up yang Anda inginkan!</Text>
            </View>

            <View>
                <MapComponent />
            </View>
        </View>
    )
};

const styles = {
    letak: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 10,
    },
}

export default PupTernak;