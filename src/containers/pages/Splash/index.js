import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeAuth');
        }, 2000)
    })
    return(
        <View style={{backgroundColor: 'white', position:'relative'}}>
            <Image source={require('../../../assets/splash/splash.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}} />
        </View>
    )
}

export default Splash;