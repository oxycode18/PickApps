import React from 'react';
import {Text, View, Button} from 'react-native';
import NavBar from '../../organisms/NavBar';

const Orders = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={{paddingTop:30, paddingLeft:16}}>Orders Page</Text>
                <Button title="Go to Order Detail" onPress={() => props.navigation.navigate('OrdersDetail')} />
            </View>
            <NavBar />
        </View>
    )
}

export default Orders;