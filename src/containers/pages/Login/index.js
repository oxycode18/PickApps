import React, {useState} from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Input } from '../../../components';
import ActionButton from './ActionButton';
import { colors } from '../../../utils';
import { LoginImg } from '../../../assets';

const Login = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: ''
    });
 
    const getData = () => {
        console.log('data yang diambil: ', form);
    };

    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
    };
    return(
        <View style={styles.wrapper.page} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={LoginImg} style={styles.illustration} />
                <Text style= {styles.text.desc}>
                    Mohon isikan Username dan Pasword anda dengan benar
                </Text>
                <View style={styles.space(33)} />
                <Input 
                    placeholder="Username" 
                    value={form.username} 
                    onChangeText={(value) => onInputChange(value, 'username')} 
                />
                <View style={styles.space(33)} />
                <Input 
                    placeholder="Password" 
                    value={form.password} 
                    onChangeText={(value) => onInputChange(value, 'password')}
                    secureTextEntry={true}
                />
                <View style={styles.letak}>
                    <ActionButton 
                        desc="" 
                        title="Login"
                        onPress={getData}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = {
    wrapper: {
    page: {padding: 20}
    },
    iconBack: {
        width: 40, 
        height: 40,
    },
    illustration: {
        width: 200, 
        height: 250,
    },
    letak: {
            justifyContent: 'center',
            alignItems: 'center',
    },
    text: {
        desc: {
            fontSize: 14, 
            fontWeight: 'bold', 
            color: colors.default,
            marginLeft: 10,
            maxWidth: 250,
        },
    },
    space: (value) => {
        return{
            height: value,
        };
    },
};

export default Login;