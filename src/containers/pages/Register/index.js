import React, {useState} from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Input } from '../../../components';
import ActionButton from './ActionButton';
import { colors } from '../../../utils';
import {RegisterImg } from '../../../assets';

const Register = () => {
    const [form, setForm] = useState({
        username: '',
        nohp: '',
        password: ''
    });
 
    const sendData = () => {
        console.log('data yang dikirim: ', form);
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
                <View style={styles.space(25)} />
                <Image source={RegisterImg} style={styles.illustration} />
                <Text style= {styles.text.desc}>
                    Mohon mengisi beberapa data untuk proses daftar anda
                </Text>
                <View style={styles.space(33)} />
                <Input 
                    placeholder="Username" 
                    value={form.username} 
                    onChangeText={(value) => onInputChange(value, 'username')} 
                />
                <View style={styles.space(33)} />
                <Input 
                    placeholder="Nomor Handphone" 
                    value={form.nohp} 
                    onChangeText={(value) => onInputChange(value, 'nohp')}
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
                        title="Daftar"
                        onPress={sendData}
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
        height: 180,
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

export default Register;
