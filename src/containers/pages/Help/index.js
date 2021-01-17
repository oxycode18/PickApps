import React from 'react';
import {Text, View} from 'react-native';
import NavBar from '../../organisms/NavBar';

const Help = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={{paddingTop:30, paddingLeft:16}}>Page Help</Text>
            </View>
            <NavBar />
        </View>
    )
}

export default Help;