import React from 'react';
import {View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainFeature = (props) => {
    return (
        <View style={{width:'25%', alignItems:'center', marginBottom:18}}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={{width:58, height:58, borderWidth:2, borderColor:'#1abc9c', borderRadius:18, justifyContent:'center', alignItems:'center'}}>
                    <Image source={props.img} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainFeature;