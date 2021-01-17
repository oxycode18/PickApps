import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

export const DestinationButton = function(props) {

     return(
        <TouchableOpacity onPress={() => {}} style={StyleSheet.container}>
            <View style={styles.leftCol}>
                <Text style={{fontSize: 8}}>{}</Text>
            </View>

            <View style={styles.centerCol}>
                <Text style={{fontFamily: 'sans-serif-thin', fontSize:15, color: "#545454"}}>
                    Pick-Up/Alamat Pengambilan
                </Text>
            </View>

            <View style={styles.rightCol}>
                <Ionicons name="md-car" color="#000000" size={25} style={{alignSelf: 'flex-end'}} />
            </View>
        </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: 'absolute',
        flexDirection:'row',
        width: (WIDTH-40),
        height: 60,
        top: 110,
        left: 20,
        borderRadius: 2,
        backgroundColor: 'blue',
        alignItems: 'center',
        shadowColor: '#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    leftCol: {
        flex: 1,
        alignItems: 'center',
    },
    centerCol: {
        flex: 4,
    },
    rightCol: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: '#1eb2a6',
    },
})