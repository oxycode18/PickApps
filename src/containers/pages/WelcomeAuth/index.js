import React from 'react';
import { View, Text, Image} from 'react-native';
import ActionButton from './ActionButton';
import { colors } from '../../../utils';
import { welcomeAuth } from '../../../assets';

const WelcomeAuth = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }

    return(
        <View style={styles.wrapper.page}>
            <Image source={welcomeAuth} style={styles.wrapper.illustration} />
            <Text style={styles.text.welcome}>
                Selamat Datang!
            </Text>
                <ActionButton 
                    desc="Silahkan masuk, jika anda telah memiliki akun" 
                    title="Masuk"
                    onPress = {() => handleGoTo('Login')}
                />
                <ActionButton 
                    desc="Silahkan daftar, jika anda belum memiliki akun" 
                    title="Daftar"
                    onPress = {() => handleGoTo('Register')}
                />
        </View>
    )
}

const styles = {
    wrapper: {
        page: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white',
        },
        illustration: {
            width: 250, 
            height:230,
        },
    },
    text: {
        welcome : {
            fontSize: 18, 
            fontWeight: 'bold', 
            color: colors.default, 
            marginBottom: 50,
        },
    },
}

export default WelcomeAuth;