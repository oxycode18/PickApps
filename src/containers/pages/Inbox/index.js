import React from 'react';
import {Text, View} from 'react-native';
import NavBar from '../../organisms/NavBar';

const Inbox = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={{paddingTop:30, paddingLeft:16}}>Inbox Page</Text>
            </View>
            <NavBar />
        </View>
    )
}

export default Inbox;