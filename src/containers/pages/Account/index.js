import React from 'react';
import {Text, View} from 'react-native';
import NavBar from '../../organisms/NavBar';

const Account = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={{paddingTop:30, paddingLeft:16}}>Account Page</Text>
            </View>
            <NavBar />
        </View>
    )
}

export default Account;